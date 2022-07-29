import styled from "styled-components";
import { Label } from "./Label";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;

	width: 100%;
	min-width: 15rem;
	max-width: 25rem;
	padding: 4rem 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

	${Label} {
		margin-top: 1rem;
	}

	button {
		margin-top: 2rem;
	}
`;
