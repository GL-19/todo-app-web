import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;

	width: 100%;
	min-width: 15rem;
	max-width: 25rem;
	padding: 4rem 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

	button {
		margin-top: 0.75rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	padding: 1rem 2rem;

	@media screen and (max-width: 850px) {
		padding: 1rem 1.25rem;
	}

	color: ${({ theme }) => theme.colors.primaryColor};
	background-color: ${({ theme }) => theme.colors.quaternaryColor};
	border: none;
	border-radius: 5px;
`;

export const SubmitButton = styled.button`
	cursor: pointer;
	width: 100%;
	height: 100%;
	padding: 1rem 2rem;

	@media screen and (max-width: 850px) {
		padding: 1rem 1.25rem;
	}

	color: ${({ theme }) => theme.colors.primaryColor};
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;

	background-color: ${({ theme }) => theme.colors.quaternaryColor};
	border: none;
	border-radius: 5px;

	&:hover,
	&:active {
		opacity: 0.75;
	}
`;
