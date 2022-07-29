import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/AuthProvider";
import { FormContainer, Input, SubmitButton, Label, ErrorMsg } from "./components";

interface ILoginFormInputs {
	email: string;
	password: string;
}

const LoginSchema = yup
	.object({
		email: yup.string().email("Invalid Email").required("Email is required"),
		password: yup.string().required("Password is Required"),
	})
	.required();

export function LoginForm() {
	const { handleLogin } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormInputs>({
		resolver: yupResolver(LoginSchema),
	});

	const [error, setError] = useState(false);

	async function onSubmit(data: ILoginFormInputs) {
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
			<Input placeholder="Email" {...register("email")} />
			<ErrorMsg>{errors.email?.message}</ErrorMsg>

			<Label>Password: </Label>
			<Input placeholder="Password" type="password" {...register("password")} />
			<ErrorMsg>{errors.password?.message}</ErrorMsg>

			{error && <ErrorMsg>Email or Password incorrect!</ErrorMsg>}
			<SubmitButton type="submit">Login</SubmitButton>
		</FormContainer>
	);
}
