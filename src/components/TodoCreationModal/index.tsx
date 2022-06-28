import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTodos } from "../../hooks/useTodos";

interface TodoCreationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

function TodoCreationModal({
	isOpen,
	onRequestClose: closeModal,
}: TodoCreationModalProps) {
	const { createTodo } = useTodos();
	const [name, setName] = useState("");
	const [deadline, setDeadline] = useState("");

	function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		createTodo({
			name,
			deadline,
		});

		setName("");
		setDeadline("");

		closeModal();
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal}>
			<h1>Create Todo</h1>
			<form action="submit" onSubmit={handleCreateTodo}>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type="date"
					placeholder="dealine"
					value={deadline}
					onChange={(e) => setDeadline(e.target.value)}
				/>

				<button type="submit">Create</button>
			</form>
		</Modal>
	);
}

export { TodoCreationModal };
