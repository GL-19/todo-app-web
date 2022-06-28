import { useState } from "react";
import { TodoCreationModal } from "./components/TodoCreationModal";
import { TodosTable } from "./components/TodosTable";
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
			<button onClick={openTodoCreationModal}>Create Todo</button>
			<TodoCreationModal
				isOpen={todoCreationModalIsOpen}
				onRequestClose={closeTodoCreationModal}
			/>
			<TodosTable />
		</Main>
	);
}

export default App;
