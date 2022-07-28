import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import { useTodos } from "../../providers/TodosProvider";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { BottomMenu, CheckBox, DeleteIcon, FilterMenu } from "./components";
import {
	TodoContainer,
	TodoName,
	TodosListContainer,
	Text,
	LoadingContainer,
} from "./styles";
import loading from "../../images/loading.svg";
import { useEffect, useState } from "react";
import { Todo } from "../../interfaces/Todo";

function TodosList() {
	const [todosUi, setTodosUi] = useState<Todo[]>([]);
	const { todos, isLoading, handleToggleDone, handleDeleteTodo, handleChangeTodoOrder } =
		useTodos();
	const isDesktop = useMediaQuery();

	useEffect(() => {
		setTodosUi(todos);
	}, [todos]);

	function updateUiOnDragEnd(id: string, newIndex: number) {
		const movedTodo = todos.find((todo) => todo.id === id) as Todo;

		const newTodosUi = todosUi.filter((todo) => todo.id !== id);
		newTodosUi.splice(newIndex, 0, movedTodo);

		setTodosUi(newTodosUi);
	}

	function handleOnDragEnd(result: DropResult): void {
		if (!result.destination) return;

		const id = result.draggableId;
		const newIndex = result.destination.index;
		const newOrder = todos[newIndex].order;

		updateUiOnDragEnd(id, newIndex);

		handleChangeTodoOrder(id, newOrder);
	}

	return (
		<>
			<TodosListContainer>
				{isLoading ? (
					<LoadingContainer>
						<img src={loading} alt="loading" />
					</LoadingContainer>
				) : (
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<Droppable droppableId="todos">
							{(provided) => (
								<ul {...provided.droppableProps} ref={provided.innerRef}>
									{todosUi.map((todo, index) => (
										<Draggable key={todo.id} draggableId={todo.id} index={index}>
											{(provided) => (
												<TodoContainer
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
												>
													<div>
														<CheckBox
															isActive={todo.isDone}
															onClick={() => handleToggleDone(todo.id)}
														/>
													</div>

													<TodoName isActive={todo.isDone}>{todo.name}</TodoName>
													<div>
														<DeleteIcon onClick={() => handleDeleteTodo(todo.id)} />
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
				)}
				<BottomMenu isDesktop={isDesktop} />
			</TodosListContainer>

			{!isDesktop && <FilterMenu />}

			<Text>Drag and Drop to reorder list</Text>
		</>
	);
}

export { TodosList };
