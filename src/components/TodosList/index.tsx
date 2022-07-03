import { useTodos } from "../../hooks/useTodos";
import { useIsDesktop } from "../../hooks/useIsDesktop";

import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import { BottomMenu, CheckBox, DeleteIcon, FilterMenu } from "./components";
import { TodoContainer, TodoName, TodosListContainer, Text } from "./styles";

function TodosList() {
	const { todos, toggleDone, deleteTodo, changeTodoOrder } = useTodos();
	const isDesktop = useIsDesktop();

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
												</div>

												<TodoName isActive={todo.done}>{todo.name}</TodoName>
												<div>
													<DeleteIcon onClick={() => deleteTodo(todo.id)} />
												</div>
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

			<Text>Drag and Drop to reorder list</Text>
		</>
	);
}

export { TodosList };
