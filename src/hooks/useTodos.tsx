import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LocalStorage } from "../services/localStorage";

type option = "all" | "done" | "incomplete";

export interface TodoInput {
	name: string;
}

export interface Todo {
	id: string;
	name: string;
	order: number;
	done: boolean;
	created_at: string;
}

interface TodosContextData {
	todos: Todo[];
	incomplete: number;
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
	const [incomplete, setIncomplete] = useState(0);
	const [total, setTotal] = useState(0);
	const [todosListOptions, setTodosListOptions] = useState<option>("all");

	const getTodosData = useCallback(async (option: option = "all"): Promise<void> => {
		const { todos } = await LocalStorage.getTodos(option);
		const { incomplete, total } = await LocalStorage.getTodosListInfo();

		setTodos(todos);
		setTotal(total);
		setIncomplete(incomplete);
	}, []);

	useEffect(() => {
		getTodosData();
	}, [getTodosData]);

	async function createTodo(data: TodoInput): Promise<void> {
		await LocalStorage.createTodo(data);

		await getTodosData(todosListOptions);
	}

	async function toggleDone(id: string): Promise<void> {
		await LocalStorage.toggleTodoDone(id);

		await getTodosData(todosListOptions);
	}

	async function deleteTodo(id: string): Promise<void> {
		await LocalStorage.deleteTodo(id);

		await getTodosData(todosListOptions);
	}

	async function deleteCompletedTodos(): Promise<void> {
		await LocalStorage.deleteCompletedTodos();

		await getTodosData(todosListOptions);
	}

	async function handleChangeTodosListOptions(option: option) {
		setTodosListOptions(option);

		const { todos } = await LocalStorage.getTodos(option);

		setTodos(todos);
	}

	async function changeTodoOrder(id: string, newOrder: number) {
		await LocalStorage.changeTodoOrder(id, newOrder);

		await getTodosData(todosListOptions);
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				total,
				incomplete,
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
