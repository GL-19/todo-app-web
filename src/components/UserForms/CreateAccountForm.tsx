import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/AuthProvider";
import { ErrorMsg, FormContainer, Input, Label, SubmitButton } from "./components";

export interface ICreateAccountFormInputs {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const CreateAccountSchema = yup
	.object({
		name: yup.string().min(3).required("Name is required"),
		email: yup.string().email("Invalid Email").required("Email is required"),
		password: yup.string().min(5).required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords do not match.")
			.required("Confirm password is required"),
	})
	.required();

export function CreateAccountForm() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateAccountFormInputs>({
		resolver: yupResolver(CreateAccountSchema),
	});
	const { handleSignup } = useAuth();
	const [error, setError] = useState(false);

	async function onSubmit(data: ICreateAccountFormInputs) {
		console.log(data);
		if (data.password !== data.confirmPassword) {
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
			<ErrorMsg>{errors.name?.message}</ErrorMsg>

			<Label>Email:</Label>
			<Input placeholder="Email" type="email" {...register("email")} />
			<ErrorMsg>{errors.email?.message}</ErrorMsg>

			<Label>Password:</Label>
			<Input placeholder="Password" type="password" {...register("password")} />
			<ErrorMsg>{errors.password?.message}</ErrorMsg>

			<Label>Confirm Password:</Label>
			<Input placeholder="Password" type="password" {...register("confirmPassword")} />
			<ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>

			{error && <ErrorMsg>An error ocurred!</ErrorMsg>}
			<SubmitButton type="submit">Register</SubmitButton>
		</FormContainer>
	);
}
