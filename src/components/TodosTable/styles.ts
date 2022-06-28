import styled from "styled-components";

export const TodosListContainer = styled.div`
	margin: 0 auto;
	min-width: 40rem;
	background-color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

	display: flex;
	flex-direction: column;
`;

export const TodoContainer = styled.div`
	width: 100%;
	padding: 1rem 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const DeleteIcon = styled.img`
	cursor: pointer;

	width: 1.5rem;
	height: 1.5rem;
`;
