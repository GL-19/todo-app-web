import { FormEvent, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { FormContainer, Input, SubmitButton, Label } from "./components";

export function LoginForm() {
	const { handleLogin } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault();

			setError(false);

			await handleLogin(email, password);
		} catch {
			setError(true);
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<Label>Email: </Label>
			<Input
				id="email"
				placeholder="E-mail"
				type="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>

			<Label>Password: </Label>
			<Input
				id="password"
				placeholder="Password"
				type="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>

			{error && <p>Email or Password incorrect!</p>}
			<SubmitButton type="submit">Login</SubmitButton>
		</FormContainer>
	);
}
