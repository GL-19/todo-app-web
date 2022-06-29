import { TodoData } from "../TodoData";

export async function changeTodoOrder(id: string, newOrder: number): Promise<void> {
	if (newOrder <= 0) {
		console.log("order must be bigger than 0");
		return;
	}

	const stringfiedTodos = localStorage.getItem("todos");

	if (stringfiedTodos) {
		const todos = JSON.parse(stringfiedTodos) as TodoData[];

		if (todos.length <= 1) return;

		if (newOrder > todos.length) {
			console.log("order cannot be bigger than todosList length");
			return;
		}

		const todo = todos.find((todo) => todo.id === id) as TodoData;

		const oldOrder = todo.order;

		if (oldOrder === newOrder) return;

		const newTodo = {
			...todo,
			order: newOrder,
		};

		if (newOrder > oldOrder) {
			//remove from old position
			const updatedTodos = todos.filter(
				(todo) => todo.id !== id || todo.order !== oldOrder
			);

			//insert in new position
			updatedTodos.splice(newOrder - 1, 0, newTodo);

			//correct necessary todos orders
			for (let i = oldOrder - 1; i < newOrder - 1; i++) {
				updatedTodos[i].order--;
			}

			localStorage.setItem("todos", JSON.stringify(updatedTodos));
		} else if (newOrder < oldOrder) {
			//insert in new position
			todos.splice(newOrder - 1, 0, newTodo);

			//remove from old position
			const updatedTodos = todos.filter(
				(todo) => todo.id !== id || todo.order !== oldOrder
			);

			//correct necessary todos orders
			for (let i = newOrder; i < oldOrder; i++) {
				updatedTodos[i].order++;
			}

			localStorage.setItem("todos", JSON.stringify(updatedTodos));
		}
	}
}
