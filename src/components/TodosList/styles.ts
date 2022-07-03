import styled from "styled-components";

export const TodosListContainer = styled.div`
	width: 100%;
	max-width: 45rem;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
	border-radius: 0.25rem;

	display: flex;
	flex-direction: column;
`;

export const TodoContainer = styled.li`
	width: 100%;
	padding: 1.25rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
	border-bottom: solid 0.25px ${({ theme }) => theme.colors.tertiaryColor};

	div {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 850px) {
		padding: 1.25rem 1.25rem;
	}
`;

interface TodoNameProps {
	isActive: boolean;
}

export const TodoName = styled.p<TodoNameProps>`
	font-size: 1.125rem;

	cursor: pointer;

	width: 100%;
	margin: 0 1.5rem;
	overflow: hidden;

	color: ${({ isActive, theme }) =>
		isActive ? theme.colors.tertiaryColor : theme.colors.primaryColor};
	text-decoration: ${({ isActive }) => (isActive ? "line-through" : "none")};
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.primaryColor};
`;
