import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Todo } from "../interfaces/Todo";
import { api } from "../services/api";
import { useAuth } from "./AuthProvider";

type option = "all" | "completed" | "incompleted";

export interface TodoInput {
	name: string;
}

interface TodosContextData {
	todos: Todo[];
	incompleted: number;
	total: number;
	todosListOptions: option;
	isLoading: boolean;
	handleCreateTodo: (data: TodoInput) => Promise<void>;
	handleDeleteTodo: (id: string) => Promise<void>;
	handleDeleteCompletedTodos: () => Promise<void>;
	handleToggleDone: (id: string) => Promise<void>;
	handleChangeTodoOrder: (id: string, newOrder: number) => void;
	handleChangeTodosListOptions: (option: option) => void;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export const TodosProvider: React.FC = ({ children }) => {
	const { token } = useAuth();

	const [todos, setTodos] = useState<Todo[]>([]);
	const [incompleted, setIncompleted] = useState(0);
	const [total, setTotal] = useState(0);
	const [todosListOptions, setTodosListOptions] = useState<option>("all");
	const [isLoading, setLoading] = useState(false);

	const getTodosData = useCallback(async (option: option): Promise<void> => {
		const getTodosResponse = await api.get("/todos", {
			params: {
				filterOption: option,
			},
		});
		const { todos } = getTodosResponse.data;

		const getTodosListInfoResponse = await api.get("/todos/info/count");
		const { incompleted, total } = getTodosListInfoResponse.data;

		setTodos(todos);
		setTotal(total);
		setIncompleted(incompleted);
	}, []);

	const fetchDataAndUpdateLoading = useCallback(
		async (option: option) => {
			try {
				setLoading(true);
				await getTodosData(option);
			} catch {
				console.log("error on fetch");
			} finally {
				setLoading(false);
			}
		},
		[getTodosData]
	);

	useEffect(() => {
		if (token) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			fetchDataAndUpdateLoading(todosListOptions);
		} else {
			setTodos([]);
			setTotal(0);
			setIncompleted(0);
			setTodosListOptions("all");
		}
	}, [fetchDataAndUpdateLoading, todosListOptions, token]);

	async function handleCreateTodo(data: TodoInput): Promise<void> {
		await api.post("/todos", {
			name: data.name,
		});

		await getTodosData(todosListOptions);
	}

	async function handleToggleDone(id: string): Promise<void> {
		await api.patch(`/todos/${id}`);

		await getTodosData(todosListOptions);
	}

	async function handleDeleteTodo(id: string): Promise<void> {
		await api.delete(`/todos/${id}`);

		await getTodosData(todosListOptions);
	}

	async function handleDeleteCompletedTodos(): Promise<void> {
		await api.delete("/todos", {
			params: {
				option: "completed",
			},
		});

		await getTodosData(todosListOptions);
	}

	async function handleChangeTodosListOptions(option: option) {
		setTodosListOptions(option);

		const response = await api.get("/todos", {
			params: {
				filterOption: option,
			},
		});
		const { todos } = response.data;

		setTodos(todos);
	}

	async function handleChangeTodoOrder(id: string, newOrder: number) {
		await api.post("/todos/change-order", {
			id,
			newOrder,
		});

		await getTodosData(todosListOptions);
	}

	return (
		<TodosContext.Provider
			value={{
				isLoading,
				todos,
				total,
				incompleted,
				todosListOptions,
				handleCreateTodo,
				handleDeleteTodo,
				handleDeleteCompletedTodos,
				handleToggleDone,
				handleChangeTodosListOptions,
				handleChangeTodoOrder,
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
