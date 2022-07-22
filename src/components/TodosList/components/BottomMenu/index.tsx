import styled from "styled-components";
import { useTodos } from "../../../../providers/TodosProvider";
import { FilterSelector } from "../FilterSelector";

interface BottomMenuProps {
	isDesktop: boolean;
}

function BottomMenu({ isDesktop }: BottomMenuProps) {
	const { incompleted, handleDeleteCompletedTodos } = useTodos();

	return (
		<BottomMenuContainer>
			<Text>{incompleted} items left</Text>

			{isDesktop && <FilterSelector />}

			<ClearDone onClick={handleDeleteCompletedTodos}>Clear Completed</ClearDone>
		</BottomMenuContainer>
	);
}

export { BottomMenu };

const BottomMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 1.75rem 1.75rem;

	@media screen and (max-width: 850px) {
		padding: 1.25rem 1.25rem;
	}
`;

const ClearDone = styled.p`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.secondaryColor};

	font-weight: 700;

	&:hover,
	&:active {
		color: ${({ theme }) => theme.colors.primaryColor};
	}
`;

const Text = styled.p`
	color: ${({ theme }) => theme.colors.secondaryColor};

	font-weight: 700;
`;
