import { TodoData } from "../TodoData";
import { v4 as uuid } from "uuid";

interface CreateTodoForm {
	name: string;
}

export async function createTodo(data: CreateTodoForm) {
	const stringifiedTodos = localStorage.getItem("todos");

	if (stringifiedTodos) {
		const todos = JSON.parse(stringifiedTodos) as TodoData[];

		const newTodo: TodoData = {
			id: uuid(),
			done: false,
			order: todos.length + 1,
			created_at: new Date().toDateString(),
			...data,
		};

		const updatedTodosList = [...todos, newTodo];

		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
	} else {
		const newTodo: TodoData = {
			id: uuid(),
			done: false,
			order: 1,
			created_at: new Date().toDateString(),
			...data,
		};

		localStorage.setItem("todos", JSON.stringify([newTodo]));
	}
}
