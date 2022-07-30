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
		name: yup.string().min(3, "Min length of 3 characthers").required("Name is required"),
		email: yup.string().email("Invalid Email").required("Email is required"),
		password: yup
			.string()
			.min(5, "Min length of 5 characthers")
			.required("Password is required"),
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
	const [emailInUse, setEmailInUse] = useState(false);

	async function onSubmit(data: ICreateAccountFormInputs) {
		if (data.password !== data.confirmPassword) {
			setEmailInUse(true);
			return;
		}
		try {
			setEmailInUse(false);
			await handleSignup({ name: data.name, email: data.email, password: data.password });
			navigate("/");
		} catch {
			setEmailInUse(true);
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<h2>Register</h2>

			<Label>Name:</Label>
			<Input type="text" placeholder="Name" {...register("name")} />
			<ErrorMsg>{errors.name?.message}</ErrorMsg>

			<Label>Email:</Label>
			<Input placeholder="Email" {...register("email")} />
			<ErrorMsg>{errors.email?.message}</ErrorMsg>

			<Label>Password:</Label>
			<Input placeholder="Password" type="password" {...register("password")} />
			<ErrorMsg>{errors.password?.message}</ErrorMsg>

			<Label>Confirm Password:</Label>
			<Input
				placeholder="Confirm password"
				type="password"
				{...register("confirmPassword")}
			/>
			<ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>

			{emailInUse && <ErrorMsg>Email already in use</ErrorMsg>}
			<SubmitButton type="submit">Register</SubmitButton>
		</FormContainer>
	);
}
