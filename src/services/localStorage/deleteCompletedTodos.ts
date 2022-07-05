import { Todo } from "../../interfaces/Todo";

export async function deleteCompletedTodos() {
	const stringfiedTodos = localStorage.getItem("todos");

	if (stringfiedTodos) {
		const todos = JSON.parse(stringfiedTodos) as Todo[];

		const updatedTodos = todos
			.filter((todo) => !todo.done)
			.map((todo, index) => {
				todo.order = index + 1;
				return todo;
			});

		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	}
}
