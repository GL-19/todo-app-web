import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { FormContainer, Input, SubmitButton } from "./styles";

export function CreateAccountForm() {
	const { handleSignup } = useAuth();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [error, setError] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		if (password !== repeatPassword) {
			setError(true);
			return;
		}

		try {
			event.preventDefault();

			setError(false);

			await handleSignup({ name, email, password });

			navigate("/");
		} catch {
			setError(true);
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<h2>Register a new account</h2>

			<Input
				placeholder="Name"
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>

			<Input
				placeholder="E-mail"
				type="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>

			<Input
				placeholder="Password"
				type="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>

			<Input
				placeholder="Repeat Password"
				type="password"
				value={repeatPassword}
				onChange={(event) => setRepeatPassword(event.target.value)}
			/>

			{error && <p>Password must match!</p>}
			<SubmitButton type="submit">Register</SubmitButton>
		</FormContainer>
	);
}
