import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Todo } from "../interfaces/Todo";
import { Api } from "../services/api";

type option = "all" | "completed" | "incompleted";

export interface TodoInput {
	name: string;
}

interface TodosContextData {
	todos: Todo[];
	incompleted: number;
	total: number;
	todosListOptions: option;
	createTodo: (data: TodoInput) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	deleteCompletedTodos: () => Promise<void>;
	toggleDone: (id: string) => Promise<void>;
	changeTodoOrder: (id: string, newOrder: number) => void;
	handleChangeTodosListOptions: (option: option) => void;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export const TodosProvider: React.FC = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [incompleted, setIncompleted] = useState(0);
	const [total, setTotal] = useState(0);
	const [todosListOptions, setTodosListOptions] = useState<option>("all");

	const getTodosData = useCallback(async (option: option): Promise<void> => {
		const response = await Api.getTodos(option);
		const { todos } = response.data;

		/* const { incompleted, total } = await LocalStorage.getTodosListInfo(); */

		console.log("getTodosData got called!");
		setTodos(todos);
		/* setTotal(total);
		setIncompleted(incompleted); */
	}, []);

	useEffect(() => {
		getTodosData(todosListOptions);
	}, [getTodosData, todosListOptions]);

	async function createTodo(data: TodoInput): Promise<void> {
		await Api.createTodo(data);

		await getTodosData(todosListOptions);
	}

	async function toggleDone(id: string): Promise<void> {
		await Api.toggleTodoDone(id);

		await getTodosData(todosListOptions);
	}

	async function deleteTodo(id: string): Promise<void> {
		await Api.deleteTodo(id);

		await getTodosData(todosListOptions);
	}

	async function deleteCompletedTodos(): Promise<void> {
		await Api.deleteCompletedTodos();

		await getTodosData(todosListOptions);
	}

	async function handleChangeTodosListOptions(option: option) {
		setTodosListOptions(option);

		const response = await Api.getTodos(option);
		const { todos } = response.data;

		setTodos(todos);
	}

	async function changeTodoOrder(id: string, newOrder: number) {
		await Api.changeTodoOrder(id, newOrder);

		await getTodosData(todosListOptions);
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				total,
				incompleted,
				todosListOptions,
				createTodo,
				deleteTodo,
				deleteCompletedTodos,
				toggleDone,
				handleChangeTodosListOptions,
				changeTodoOrder,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export function useTodos() {
	const context = useContext(TodosContext);

	return context;
}
