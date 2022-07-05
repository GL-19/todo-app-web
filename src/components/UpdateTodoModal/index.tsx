import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTodos } from "../../providers/TodosProvider";

interface UpdateTodoModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

/* function UpdateTodoModal({ isOpen, onRequestClose: closeModal }: UpdateTodoModalProps) {
	const { createTodo } = useTodos();
	const [name, setName] = useState("");

	function handleUpdateTodo(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		createTodo({
			name,
		});

		setName("");

		closeModal();
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal}>
			<h1>Create Todo</h1>
			<form action="submit" onSubmit={handleUpdateTodo}>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<button type="submit">Create</button>
			</form>
		</Modal>
	);
} */

// export { UpdateTodoModal };
