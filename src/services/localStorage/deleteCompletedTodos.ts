import { TodoData } from "../TodoData";

export async function deleteCompletedTodos() {
	const stringfiedTodos = localStorage.getItem("todos");

	if (stringfiedTodos) {
		const todos = JSON.parse(stringfiedTodos) as TodoData[];

		const updatedTodos = todos.filter((todo) => !todo.done);

		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	}
}
