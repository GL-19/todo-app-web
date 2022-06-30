import { FormEvent, useState } from "react";
import { useTodos } from "../../hooks/useTodos";

function CreateTodoForm() {
	const { createTodo } = useTodos();
	const [name, setName] = useState("");

	function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		createTodo({
			name,
		});

		setName("");
	}

	return (
		<div>
			<h1>Create Todo</h1>
			<form action="submit" onSubmit={handleCreateTodo}>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<button type="submit">Create Todo</button>
			</form>
		</div>
	);
}

export { CreateTodoForm };
