import { createContext, ReactNode, useContext, useState } from "react";

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

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>([]);

	function createTodo(data: TodoInput) {
		console.log("Implementar createTodo");
	}

	function deleteTodo(id: string) {
		console.log("Implementar deleteTodo");
	}

	function toggleTodoDoneStatus(id: string) {
		console.log("Implementar toggleTodoDoneStatus");
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
