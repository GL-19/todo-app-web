import { TodoData } from "../TodoData";

export async function toggleTodoDone(id: string): Promise<void> {
	const stringifiedTodos = localStorage.getItem("todos");

	if (stringifiedTodos) {
		const todos = JSON.parse(stringifiedTodos) as TodoData[];

		const updatedTodosList = todos.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}

			return todo;
		});

		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
	}
}
