import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface TodoInput {
	name: string;
	priority: string;
	deadline: string;
}

interface Todo {
	id: string;
	name: string;
	priority: string;
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

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const stringifiedTodosList = localStorage.getItem("todos");

		if (stringifiedTodosList) {
			setTodos(JSON.parse(stringifiedTodosList));
		}
	}, []);

	function createTodo(data: TodoInput) {
		const newTodo: Todo = {
			id: uuid(),
			done: false,
			created_at: new Date().toDateString(),
			...data,
		};

		const updatedTodosList = [...todos, newTodo];

		setTodos(updatedTodosList);
		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
	}

	function deleteTodo(id: string) {
		const updatedTodosList = todos.filter((todo) => todo.id !== id);

		setTodos(updatedTodosList);
		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
	}

	function toggleTodoDoneStatus(id: string) {
		const updatedTodosList = todos.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}

			return todo;
		});

		setTodos(updatedTodosList);
		localStorage.setItem("todos", JSON.stringify(updatedTodosList));
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
