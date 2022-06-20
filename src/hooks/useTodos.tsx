import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface TodoInput {
	name: string;
	priority: "high" | "normal" | "low";
	deadline: string;
}

interface Todo {
	id: string;
	name: string;
	priority: "high" | "normal" | "low";
	deadline: string;
	done: boolean;
	created_at: string;
}

interface TodosProviderProps {
	children: ReactNode;
}

interface TodosContextData {
	createTodo: (data: TodoInput) => void;
	deleteTodo: (id: string) => void;
	toggleTodoDoneStatus: (id: string) => void;
	todos: Todo[];
}

const testTodosList: Todo[] = [
	{
		id: uuid(),
		name: "Test Todo 1",
		done: false,
		created_at: new Date().toDateString(),
		priority: "high",
		deadline: new Date().toDateString(),
	},
	{
		id: uuid(),
		name: "Test Todo 2",
		done: true,
		created_at: new Date().toDateString(),
		priority: "normal",
		deadline: new Date().toDateString(),
	},
	{
		id: uuid(),
		name: "Test Todo 3",
		done: false,
		created_at: new Date().toDateString(),
		priority: "low",
		deadline: new Date().toDateString(),
	},
];

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		setTodos(testTodosList);
	}, []);

	function createTodo(data: TodoInput) {
		const newTodo: Todo = {
			id: uuid(),
			done: false,
			created_at: new Date().toDateString(),
			...data,
		};

		setTodos((todos) => [...todos, newTodo]);
	}

	function deleteTodo(id: string) {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}

	function toggleTodoDoneStatus(id: string) {
		const updatedTodoList = todos.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}

			return todo;
		});

		setTodos(updatedTodoList);
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				createTodo,
				deleteTodo,
				toggleTodoDoneStatus,
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
