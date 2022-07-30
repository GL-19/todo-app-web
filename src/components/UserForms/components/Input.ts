import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	height: 100%;

	padding: 1rem 1.25rem;
	border-radius: 5px;

	color: ${({ theme }) => theme.colors.primaryColor};
	background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
	border: none;

	&:focus {
		outline: ${({ theme }) => theme.colors.purple};
	}

	@media screen and (min-width: 850px) {
		padding: 1rem 2rem;
	}
`;
