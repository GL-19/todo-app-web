import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../../providers/AuthProvider";
import { FormContainer, Input, Label, SubmitButton } from "./components";

export interface ICreateAccountFormData {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export function CreateAccountForm() {
	const { handleSignup } = useAuth();
	const { register, handleSubmit } = useForm<ICreateAccountFormData>();
	const navigate = useNavigate();

	const [error, setError] = useState(false);

	async function onSubmit(data: ICreateAccountFormData) {
		console.log(data);
		if (data.password !== data.repeatPassword) {
			setError(true);
			return;
		}
		try {
			setError(false);
			await handleSignup({ name: data.name, email: data.email, password: data.password });
			navigate("/");
		} catch {
			setError(true);
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<h2>Register</h2>

			<Label>Name:</Label>
			<Input type="text" placeholder="Name" {...register("name")} />

			<Label>Email:</Label>
			<Input placeholder="Email" type="email" {...register("email")} />

			<Label>Password:</Label>
			<Input placeholder="Password" type="password" {...register("password")} />

			<Label>Repeat Password:</Label>
			<Input placeholder="Password" type="password" {...register("repeatPassword")} />

			{error && <p>Password must match!</p>}
			<SubmitButton type="submit">Register</SubmitButton>
		</FormContainer>
	);
}
