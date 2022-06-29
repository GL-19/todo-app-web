import { TodoData } from "../TodoData";

export async function deleteTodo(id: string): Promise<void> {
	const stringfiedTodos = localStorage.getItem("todos");

	if (stringfiedTodos) {
		const todos = JSON.parse(stringfiedTodos) as TodoData[];

		const deletedTodo = todos.find((todo) => todo.id === id) as TodoData;

		const updatedTodos = todos.filter((todo) => {
			if (todo.order > deletedTodo.order) {
				todo.order = todo.order - 1;
			}

			return todo.id !== id;
		});

		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	}
}
