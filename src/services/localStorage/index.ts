import { getTodos } from "./getTodos";

/* function countUnfinished(todos: TodoData[]): number {
	return todos.reduce((count, todo) => {
		if (!todo.done) count++;
		return count;
	}, 0);
} */

/* export async function localGetTodosNumbers(): Promise<TodoData[]> {
	const stringifiedTodosList = localStorage.getItem("todos");

	if (stringifiedTodosList) {
		const todos = JSON.parse(stringifiedTodosList) as TodoData[];

		if (option === "done") {
			return todos.filter((todo) => todo.done === true);
		}

		if (option === "incomplete") {
			return todos.filter((todo) => todo.done === false);
		}

		return todos;
	}

	return [];
} */

export async function localCreateTodo() {}

async function localUpdateTodo() {}

export { getTodos };
