import { useState } from "react";
import { Summary } from "./components/Summary";
import { TodoCreationModal } from "./components/TodoCreationModal";
import { TodosTable } from "./components/TodosTable";

function App() {
	const [todoCreationModalIsOpen, setTodoCreationModalIsOpen] = useState(false);

	function openTodoCreationModal() {
		setTodoCreationModalIsOpen(true);
	}

	function closeTodoCreationModal() {
		setTodoCreationModalIsOpen(false);
	}

	return (
		<>
			<h1>Todos List</h1>
			<button onClick={openTodoCreationModal}>Create Todo</button>
			<TodoCreationModal
				isOpen={todoCreationModalIsOpen}
				onRequestClose={closeTodoCreationModal}
			/>
			<Summary />
			<TodosTable />
		</>
	);
}

export default App;
