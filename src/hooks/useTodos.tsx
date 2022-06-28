import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function countUnfinished(todos: Todo[]): number {
	return todos.reduce((count, todo) => {
		if (!todo.done) count++;
		return count;
	}, 0);
}

export interface TodoInput {
	name: string;
	deadline: string;
}

export interface Todo {
	id: string;
	name: string;
	deadline: string;
	done: boolean;
	created_at: string;
}

interface TodosProviderProps {
	children: ReactNode;
}

interface TodosContextData {
	getAllTodos: () => Todo[];
	getDoneTodos: () => Todo[];
	getIncompleteTodos: () => Todo[];
	createTodo: (data: TodoInput) => void;
	deleteTodo: (id: string) => void;
	toggleTodoDoneStatus: (id: string) => void;
	todos: Todo[];
	remainingTodos: number;
	totalTodos: number;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [remainingTodos, setRemainingTodos] = useState(0);
	const [totalTodos, setTotalTodos] = useState(0);

	useEffect(() => {
		const stringifiedTodosList = localStorage.getItem("todos");

		if (stringifiedTodosList) {
			const todosList = JSON.parse(stringifiedTodosList) as Todo[];
			setTodos(todosList);
			setTotalTodos(todosList.length);
			setRemainingTodos(countUnfinished(todosList));
		}
	}, []);

	function updateTodosTotalAndRemaining() {
		const stringifiedTodosList = localStorage.getItem("todos");

		if (stringifiedTodosList) {
			const todosList = JSON.parse(stringifiedTodosList) as Todo[];

			setTotalTodos(todosList.length);
			setRemainingTodos(countUnfinished(todosList));
		}
	}

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

		updateTodosTotalAndRemaining();
	}

	function deleteTodo(id: string) {
		const updatedTodosList = todos.filter((todo) => todo.id !== id);

		setTodos(updatedTodosList);
		localStorage.setItem("todos", JSON.stringify(updatedTodosList));

		updateTodosTotalAndRemaining();
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

		updateTodosTotalAndRemaining();
	}

	function getAllTodos() {
		return [];
	}

	function getDoneTodos() {
		return [];
	}

	function getIncompleteTodos() {
		return [];
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
				getAllTodos,
				getDoneTodos,
				getIncompleteTodos,
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
