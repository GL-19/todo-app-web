import styled from "styled-components";
import { ErrorMsg } from "./ErrorMsg";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;

	width: 100%;
	min-width: 15rem;
	max-width: 25rem;
	padding: 4rem 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

	label {
		margin-top: 1rem;
		margin-bottom: 0.125rem;
		margin-left: 0.125rem;
	}

	button {
		margin-top: 2rem;
	}

	${ErrorMsg} {
		margin-top: 0.5rem;
		margin-left: 0.5rem;
	}
`;
