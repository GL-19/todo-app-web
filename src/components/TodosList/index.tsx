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

	async function handleOnDragEnd(result: DropResult): Promise<void> {
		if (!result.destination) return;

		try {
			const id = result.draggableId;
			const newIndex = result.destination.index;
			const newOrder = todos[newIndex].order;

			updateUiOnDragEnd(id, newIndex);
			await handleChangeTodoOrder(id, newOrder);
		} catch (error) {
			console.log(error);
			setTodosUi(todos);
		}
	}

	async function handleOnClickDelete(id: string): Promise<void> {
		try {
			const newTodosUi = todosUi.filter((todo) => todo.id !== id);
			setTodosUi(newTodosUi);

			await handleDeleteTodo(id);
		} catch (error) {
			console.log(error);
			setTodosUi(todos);
		}
	}

	async function handleOnClickCheckBox(id: string): Promise<void> {
		try {
			const newTodosUi = todosUi.map((todo) => {
				if (todo.id === id) {
					todo.isDone = !todo.isDone;
				}
				return todo;
			});

			setTodosUi(newTodosUi);

			await handleToggleDone(id);
		} catch (error) {
			console.log(error);
			setTimeout(() => setTodosUi(todos), 1000);
			// setTodosUi(todos);
		}
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
															onClick={() => handleOnClickCheckBox(todo.id)}
														/>
													</div>

													<TodoName isActive={todo.isDone}>{todo.name}</TodoName>
													<div>
														<DeleteIcon onClick={() => handleOnClickDelete(todo.id)} />
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
