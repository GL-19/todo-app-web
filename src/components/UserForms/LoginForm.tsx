import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FormContainer, Input, SubmitButton, Label } from "./components";

interface ILoginFormData {
	email: string;
	password: string;
}

export function LoginForm() {
	const { handleLogin } = useAuth();
	const { register, handleSubmit } = useForm<ILoginFormData>();

	const [error, setError] = useState(false);

	async function onSubmit(data: ILoginFormData) {
		try {
			setError(false);

			await handleLogin(data.email, data.password);
		} catch {
			setError(true);
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<Label>Email: </Label>
			<Input placeholder="Email" type="email" {...register("email")} />

			<Label>Password: </Label>
			<Input placeholder="Password" type="password" {...register("password")} />

			{error && <p>Email or Password incorrect!</p>}
			<SubmitButton type="submit">Login</SubmitButton>
		</FormContainer>
	);
}
