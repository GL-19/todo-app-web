import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import * as LocalStorage from "../services/localStorage";

type option = "all" | "done" | "incomplete";

export interface TodoInput {
	name: string;
	description: string;
}

export interface Todo {
	id: string;
	name: string;
	order?: number;
	description: string;
	done: boolean;
	created_at: string;
}

interface TodosProviderProps {
	children: ReactNode;
}

interface TodosContextData {
	createTodo: (data: TodoInput) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	deleteCompletedTodos: () => Promise<void>;
	toggleDone: (id: string) => Promise<void>;
	handleChangeTodosFilterOption: (option: option) => void;
	todos: Todo[];
	incomplete: number;
	total: number;
	todosFilterOption: option;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [incomplete, setIncomplete] = useState(0);
	const [total, setTotal] = useState(0);
	const [todosFilterOption, setTodosFilterOption] = useState<option>("all");

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

	async function handleChangeTodosFilterOption(option: option) {
		setTodosFilterOption(option);

		const { todos } = await LocalStorage.getTodos(option);

		setTodos(todos);
	}

	async function createTodo(data: TodoInput): Promise<void> {
		await LocalStorage.createTodo(data);

		await getTodosData(todosFilterOption);
	}

	async function toggleDone(id: string): Promise<void> {
		await LocalStorage.toggleTodoDone(id);

		await getTodosData(todosFilterOption);
	}

	async function deleteTodo(id: string): Promise<void> {
		await LocalStorage.deleteTodo(id);

		await getTodosData(todosFilterOption);
	}

	async function deleteCompletedTodos(): Promise<void> {
		await LocalStorage.deleteCompletedTodos();

		await getTodosData(todosFilterOption);
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				total,
				incomplete,
				todosFilterOption,
				createTodo,
				deleteTodo,
				deleteCompletedTodos,
				toggleDone,
				handleChangeTodosFilterOption,
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
