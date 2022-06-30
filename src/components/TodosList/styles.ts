import styled from "styled-components";

export const TodosListContainer = styled.div`
	width: 100%;
	max-width: 50rem;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 850px) {
		padding: 1.25rem;
	}
`;

export const TodoContainer = styled.li`
	width: 100%;
	padding: 0.75rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
	border-bottom: solid 0.25px gray;

	div {
		display: flex;
		align-items: center;

		gap: 1.5rem;
	}
`;
