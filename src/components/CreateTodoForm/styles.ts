import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	width: 100%;
	max-width: 45rem;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;

	padding: 1rem 2rem;
	border-radius: 5px 0 0 5px;

	@media screen and (max-width: 850px) {
		padding: 1rem 1.25rem;
	}

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
	color: ${({ theme }) => theme.colors.primaryColor};
	border: none;

	&:focus {
		outline: ${({ theme }) => theme.colors.purple};
	}
`;

export const SubmitButton = styled.button`
	cursor: pointer;
	min-height: 2rem;
	height: 100%;
	min-width: 2.5rem;

	padding: 1rem 2rem;

	@media screen and (max-width: 850px) {
		padding: 1rem 1.25rem;
	}

	color: ${({ theme }) => theme.colors.primaryColor};
	font-weight: 900;
	text-align: center;

	background-color: ${({ theme }) => theme.colors.quaternaryColor};
	border: none;
	border-radius: 0 5px 5px 0;

	&:hover,
	&:active {
		opacity: 0.75;
	}
`;
