import { FormEvent, useState } from "react";
import { useTodos } from "../../providers/TodosProvider";
import { FormContainer, Input, SubmitButton } from "./styles";

function CreateTodoForm() {
	const { handleCreateTodo } = useTodos();
	const [name, setName] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (name) {
			handleCreateTodo({
				name,
			});

			setName("");
		}
	}

	return (
		<FormContainer action="submit" onSubmit={handleSubmit}>
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
