import { useState } from "react";
import { TodoCreationModal } from "./components/TodoCreationModal";
import { TodosList } from "./components/TodosList";
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

			{/* <button
				onClick={() => handleChangeTodoOrder("5cf87fb2-4652-4eb9-9775-f240dae3d03a", 1)}
			>
				change quarto
			</button> */}
			<TodoCreationModal
				isOpen={todoCreationModalIsOpen}
				onRequestClose={closeTodoCreationModal}
			/>
			<TodosList />
		</Main>
	);
}

export default App;
