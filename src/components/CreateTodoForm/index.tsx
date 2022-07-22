import { FormEvent, useState } from "react";
import { useTodos } from "../../providers/TodosProvider";
import { FormContainer, Input, SubmitButton } from "./styles";

function CreateTodoForm() {
	const { handleCreateTodo: createTodo } = useTodos();
	const [name, setName] = useState("");

	function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (name) {
			createTodo({
				name,
			});

			setName("");
		}
	}

	return (
		<FormContainer action="submit" onSubmit={handleCreateTodo}>
			<Input
				type="text"
				placeholder="Create a new todo..."
				minLength={3}
				maxLength={60}
				pattern="^((?:\s*[A-Za-z]\s*){3, 60})$"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<SubmitButton type="submit">NEW</SubmitButton>
		</FormContainer>
	);
}

export { CreateTodoForm };
