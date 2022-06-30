import { useState } from "react";
import { TodoCreationModal, TodosList, CreateTodoForm } from "./components";
import { useTheme } from "./hooks/useTheme";
import { Main } from "./styles/styles";

function App() {
	const [todoCreationModalIsOpen, setTodoCreationModalIsOpen] = useState(false);
	const { toggleTheme, theme } = useTheme();

	function openTodoCreationModal() {
		setTodoCreationModalIsOpen(true);
	}

	function closeTodoCreationModal() {
		setTodoCreationModalIsOpen(false);
	}

	return (
		<Main>
			<h1>Todos List</h1>

			<button onClick={toggleTheme}>
				{theme === "dark" ? "Change to light theme" : "Change to dark theme"}
			</button>
			<CreateTodoForm />

			<TodoCreationModal
				isOpen={todoCreationModalIsOpen}
				onRequestClose={closeTodoCreationModal}
			/>
			<TodosList />
			<p>Drag and Drop to reorder list</p>
		</Main>
	);
}

export default App;
