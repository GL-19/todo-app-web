import styled from "styled-components";

export const TodosListContainer = styled.div`
	margin: 0 auto;
	max-width: 900px;
	min-width: 40rem;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

	display: flex;
	flex-direction: column;
`;

export const TodoContainer = styled.div`
	width: 100%;
	padding: 0.75rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;

		gap: 1.5rem;
	}
`;

export const DeleteIcon = styled.img`
	cursor: pointer;

	width: 1.5rem;
	height: 1.5rem;
`;
