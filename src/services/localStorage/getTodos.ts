import { Todo } from "../../interfaces/Todo";

type option = "all" | "done" | "incomplete";

interface GetTodosResponse {
	todos: Todo[];
}

export async function getTodos(option: option = "all"): Promise<GetTodosResponse> {
	const stringifiedTodosList = localStorage.getItem("todos");

	if (stringifiedTodosList) {
		const todos = JSON.parse(stringifiedTodosList) as Todo[];

		if (option === "done") {
			const filteredTodos = todos.filter((todo) => todo.done === true);

			return {
				todos: filteredTodos,
			};
		}

		if (option === "incomplete") {
			const filteredTodos = todos.filter((todo) => todo.done === false);

			return {
				todos: filteredTodos,
			};
		}

		return { todos };
	}

	return { todos: [] };
}
