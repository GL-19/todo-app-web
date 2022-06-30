import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";

import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import { BottomMenu, CheckBox, DeleteIcon, FilterMenu } from "./components";
import { TodoContainer, TodosListContainer } from "./styles";

function TodosList() {
	const { todos, toggleDone, deleteTodo, changeTodoOrder } = useTodos();
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const desktopWidthThreshold = 850;

		const updateMedia = () => {
			if (window.innerWidth > desktopWidthThreshold) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		};

		window.addEventListener("resize", updateMedia);

		updateMedia();

		return () => window.removeEventListener("resize", updateMedia);
	}, []);

	function handleOnDragEnd(result: DropResult): void {
		if (!result.destination) return;

		const id = result.draggableId;
		const newOrder = todos[result.destination.index].order;

		changeTodoOrder(id, newOrder);
	}

	return (
		<>
			<TodosListContainer>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId="todos">
						{(provided) => (
							<ul {...provided.droppableProps} ref={provided.innerRef}>
								{todos.map((todo, index) => (
									<Draggable key={todo.id} draggableId={todo.id} index={index}>
										{(provided) => (
											<TodoContainer
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												<div>
													<CheckBox
														isActive={todo.done}
														onClick={() => toggleDone(todo.id)}
													/>
													<h1>{todo.name}</h1>
												</div>
												<DeleteIcon onClick={() => deleteTodo(todo.id)} />
											</TodoContainer>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</ul>
						)}
					</Droppable>
				</DragDropContext>
				<BottomMenu isDesktop={isDesktop} />
			</TodosListContainer>
			{!isDesktop && <FilterMenu />}
		</>
	);
}

export { TodosList };
