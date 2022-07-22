import { Todo } from "../../interfaces/Todo";

interface GetTodosListInfoResponse {
	total: number;
	completed: number;
	incomplete: number;
}

export async function getTodosListInfo(): Promise<GetTodosListInfoResponse> {
	const stringifiedTodosList = localStorage.getItem("todos");

	if (stringifiedTodosList) {
		const todos = JSON.parse(stringifiedTodosList) as Todo[];

		const total = todos.length;

		const incomplete = todos.reduce((count, todo) => {
			if (!todo.isDone) count++;
			return count;
		}, 0);

		return {
			total,
			incomplete,
			completed: total - incomplete,
		};
	} else {
		return {
			total: 0,
			completed: 0,
			incomplete: 0,
		};
	}
}
