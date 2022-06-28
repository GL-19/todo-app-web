import { TodoData } from "../TodoData";
import { v4 as uuid } from "uuid";

interface CreateTodoInput {
	name: string;
	description: string;
}

export async function createTodo(data: CreateTodoInput) {
	const newTodo: TodoData = {
		id: uuid(),
		done: false,
		created_at: new Date().toDateString(),
		...data,
	};

	const stringifiedTodos = localStorage.getItem("todos");

	if (stringifiedTodos) {
		const todos = JSON.parse(stringifiedTodos);

		const updatedTodosList = [...todos, newTodo];

		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
	} else {
		localStorage.setItem("todos", JSON.stringify([newTodo]));
	}
}
