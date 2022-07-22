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
	handleCreateTodo: (data: TodoInput) => Promise<void>;
	handleDeleteTodo: (id: string) => Promise<void>;
	handleDeleteCompletedTodos: () => Promise<void>;
	handleToggleDone: (id: string) => Promise<void>;
	handleChangeTodoOrder: (id: string, newOrder: number) => void;
	handleChangeTodosListOptions: (option: option) => void;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export const TodosProvider: React.FC = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [incompleted, setIncompleted] = useState(0);
	const [total, setTotal] = useState(0);
	const [todosListOptions, setTodosListOptions] = useState<option>("all");

	const getTodosData = useCallback(async (option: option): Promise<void> => {
		const getTodosResponse = await Api.getTodos(option);
		const { todos } = getTodosResponse.data;

		const getTodosListInfoResponse = await Api.getTodosListInfo();
		const { incompleted, total } = getTodosListInfoResponse.data;

		setTodos(todos);
		setTotal(total);
		setIncompleted(incompleted);
	}, []);

	useEffect(() => {
		getTodosData(todosListOptions);
	}, [getTodosData, todosListOptions]);

	async function handleCreateTodo(data: TodoInput): Promise<void> {
		await Api.createTodo(data);

		await getTodosData(todosListOptions);
	}

	async function handleToggleDone(id: string): Promise<void> {
		await Api.toggleTodoDone(id);

		await getTodosData(todosListOptions);
	}

	async function handleDeleteTodo(id: string): Promise<void> {
		await Api.deleteTodo(id);

		await getTodosData(todosListOptions);
	}

	async function handleDeleteCompletedTodos(): Promise<void> {
		await Api.deleteCompletedTodos();

		await getTodosData(todosListOptions);
	}

	async function handleChangeTodosListOptions(option: option) {
		setTodosListOptions(option);

		const response = await Api.getTodos(option);
		const { todos } = response.data;

		setTodos(todos);
	}

	async function handleChangeTodoOrder(id: string, newOrder: number) {
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
