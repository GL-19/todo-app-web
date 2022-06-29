import { useTodos } from "../../hooks/useTodos";
import { DeleteIcon, TodoContainer, TodosListContainer } from "./styles";
import deleteIcon from "../../images/icon-cross.svg";
import { CheckBox } from "./components/CheckBox";
import { Summary } from "./components/Summary";

function TodosTable() {
	const { todos, toggleDone, deleteTodo } = useTodos();

	return (
		<TodosListContainer>
			{todos.map((todo) => (
				<TodoContainer key={todo.id}>
					<CheckBox isActive={todo.done} onClick={() => toggleDone(todo.id)} />
					<h1>{todo.name}</h1>
					<DeleteIcon src={deleteIcon} alt="delete" onClick={() => deleteTodo(todo.id)} />
				</TodoContainer>
			))}
			<Summary />
		</TodosListContainer>
	);
}

export { TodosTable };
