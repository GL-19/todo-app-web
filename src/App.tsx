import { useState } from "react";
import { TodoCreationModal, TodosList, CreateTodoForm } from "./components";
import { Main } from "./styles/styles";

function App() {
	const [todoCreationModalIsOpen, setTodoCreationModalIsOpen] = useState(false);

	function openTodoCreationModal() {
		setTodoCreationModalIsOpen(true);
	}

	function closeTodoCreationModal() {
		setTodoCreationModalIsOpen(false);
	}

	return (
		<Main>
			<h1>Todos List</h1>
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
