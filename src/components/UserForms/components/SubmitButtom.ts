import styled from "styled-components";

export const SubmitButton = styled.button`
	cursor: pointer;
	width: 100%;
	height: 100%;
	min-height: 2rem;
	min-width: 2.5rem;

	padding: 1rem 1.25rem;

	color: ${({ theme }) => theme.colors.primaryColor};
	font-size: 1rem;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;

	background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
	border: none;
	border-radius: 5px;

	&:hover,
	&:active {
		opacity: 0.75;
	}

	@media screen and (min-width: 850px) {
		padding: 1rem 2rem;
	}
`;
