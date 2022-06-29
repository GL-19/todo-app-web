import { TodoData } from "../TodoData";

export async function deleteTodo(id: string): Promise<void> {
	const stringfiedTodos = localStorage.getItem("todos");

	if (stringfiedTodos) {
		const todos = JSON.parse(stringfiedTodos) as TodoData[];

		const updatedTodos = todos.filter((todo) => todo.id !== id);

		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	}
}
