import styled from "styled-components";

export const TodosListContainer = styled.div`
	width: 100%;
	max-width: 45rem;
	padding: 1.25rem 2rem;
	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
	border-radius: 0.25rem;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 850px) {
		padding: 1.25rem 1.25rem;
	}
`;

export const TodoContainer = styled.li`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
	border-bottom: solid 0.25px ${({ theme }) => theme.colors.tertiaryColor};

	div {
		display: flex;
		align-items: center;

		gap: 1.5rem;
	}
`;

interface TodoNameProps {
	isActive: boolean;
}

export const TodoName = styled.p<TodoNameProps>`
	font-size: 1.125rem;

	cursor: pointer;

	color: ${({ isActive, theme }) =>
		isActive ? theme.colors.tertiaryColor : theme.colors.primaryColor};
	text-decoration: ${({ isActive }) => (isActive ? "line-through" : "none")};
`;
