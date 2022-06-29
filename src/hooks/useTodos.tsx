import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as LocalStorage from "../services/localStorage";

type option = "all" | "done" | "incomplete";

export interface TodoInput {
	name: string;
	description: string;
}

export interface Todo {
	id: string;
	name: string;
	description: string;
	done: boolean;
	created_at: string;
}

interface TodosProviderProps {
	children: ReactNode;
}

interface TodosContextData {
	selectAllTodos: () => Promise<void>;
	selectDoneTodos: () => Promise<void>;
	selectIncompleteTodos: () => Promise<void>;
	createTodo: (data: TodoInput) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	toggleTodoDoneStatus: (id: string) => Promise<void>;
	handleShowTodosFilterChange: (option: option) => void;
	todos: Todo[];
	remainingTodos: number;
	totalTodos: number;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [showTodosFilter, setShowTodosFilter] = useState<option>("all");
	const [remainingTodos, setRemainingTodos] = useState(0);
	const [totalTodos, setTotalTodos] = useState(0);

	useEffect(() => {
		async function getData(): Promise<void> {
			const { todos } = await LocalStorage.getTodos();
			const { incomplete, total } = await LocalStorage.getTodosListInfo();

			setTodos(todos);
			setTotalTodos(total);
			setRemainingTodos(incomplete);
		}

		getData();
	}, []);

	async function handleShowTodosFilterChange(option: option) {
		setShowTodosFilter(option);

		const { todos } = await LocalStorage.getTodos(option);

		setTodos(todos);
	}

	async function createTodo(data: TodoInput): Promise<void> {
		await LocalStorage.createTodo(data);

		const { todos } = await LocalStorage.getTodos(showTodosFilter);

		const { incomplete, total } = await LocalStorage.getTodosListInfo();

		setTodos(todos);
		setTotalTodos(total);
		setRemainingTodos(incomplete);
	}

	async function toggleTodoDoneStatus(id: string): Promise<void> {
		await LocalStorage.toggleTodoDone(id);

		const { todos } = await LocalStorage.getTodos(showTodosFilter);

		const { incomplete, total } = await LocalStorage.getTodosListInfo();

		setTodos(todos);
		setTotalTodos(total);
		setRemainingTodos(incomplete);
	}

	async function deleteTodo(id: string): Promise<void> {
		await LocalStorage.deleteTodo(id);

		const { todos } = await LocalStorage.getTodos(showTodosFilter);

		const { incomplete, total } = await LocalStorage.getTodosListInfo();

		setTodos(todos);
		setTotalTodos(total);
		setRemainingTodos(incomplete);
	}

	async function selectAllTodos(): Promise<void> {
		const { todos } = await LocalStorage.getTodos("all");

		setTodos(todos);
	}

	async function selectDoneTodos(): Promise<void> {
		const { todos } = await LocalStorage.getTodos("done");

		setTodos(todos);
	}

	async function selectIncompleteTodos(): Promise<void> {
		const { todos } = await LocalStorage.getTodos("incomplete");

		setTodos(todos);
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				totalTodos,
				remainingTodos,
				createTodo,
				deleteTodo,
				toggleTodoDoneStatus,
				selectAllTodos,
				selectIncompleteTodos,
				selectDoneTodos,
				handleShowTodosFilterChange,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
}

export function useTodos() {
	const context = useContext(TodosContext);

	return context;
}
