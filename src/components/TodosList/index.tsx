import { useTodos } from "../../hooks/useTodos";
import { DeleteIcon, TodoContainer, TodosListContainer } from "./styles";
import deleteIcon from "../../images/icon-cross.svg";
import { CheckBox } from "./components/CheckBox";
import { Summary } from "./components/Summary";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

function TodosList() {
	const { todos, toggleDone, deleteTodo, changeTodoOrder } = useTodos();

	function handleOnDragEnd(result: DropResult): void {
		if (!result.destination) return;

		const id = result.draggableId;
		const newOrder = todos[result.destination.index].order;

		changeTodoOrder(id, newOrder);
	}

	return (
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
											<DeleteIcon
												src={deleteIcon}
												alt="delete"
												onClick={() => deleteTodo(todo.id)}
											/>
										</TodoContainer>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
			<Summary />
		</TodosListContainer>
	);
}

export { TodosList };
