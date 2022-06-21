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
	const [priority, setPriority] = useState("normal");

	function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		createTodo({
			name,
			deadline,
			priority,
		});

		setName("");
		setDeadline("");
		setPriority("normal");

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
				<select
					name="priority"
					value={priority}
					onChange={(e) => setPriority(e.target.value)}
				>
					<option value="high">High</option>
					<option value="normal">Normal</option>
					<option value="low">Low</option>
				</select>
				<button type="submit">Create</button>
			</form>
		</Modal>
	);
}

export { TodoCreationModal };
