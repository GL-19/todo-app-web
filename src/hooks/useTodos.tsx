import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as LocalStorage from "../services/localStorage";

/* function countUnfinished(todos: Todo[]): number {
	return todos.reduce((count, todo) => {
		if (!todo.done) count++;
		return count;
	}, 0);
} */

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
	deleteTodo: (id: string) => void;
	toggleTodoDoneStatus: (id: string) => Promise<void>;
	todos: Todo[];
	remainingTodos: number;
	totalTodos: number;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [showTodosFilter, setShowTodosFilter] = useState<"all" | "done" | "incomplete">(
		"all"
	);
	const [remainingTodos, setRemainingTodos] = useState(0);
	const [totalTodos, setTotalTodos] = useState(0);

	useEffect(() => {
		async function getData(): Promise<void> {
			const { todos } = await LocalStorage.getTodos();
			setTodos(todos);
		}

		getData();
	}, []);

	async function createTodo(data: TodoInput): Promise<void> {
		await LocalStorage.createTodo(data);

		const { todos } = await LocalStorage.getTodos(showTodosFilter);

		setTodos(todos);
	}

	async function toggleTodoDoneStatus(id: string): Promise<void> {
		await LocalStorage.toggleTodoDone(id);

		const { todos } = await LocalStorage.getTodos(showTodosFilter);

		setTodos(todos);
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

	function deleteTodo(id: string) {
		const updatedTodosList = todos.filter((todo) => todo.id !== id);

		localStorage.setItem("todos", JSON.stringify(updatedTodosList));

		setTodos(updatedTodosList);
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
