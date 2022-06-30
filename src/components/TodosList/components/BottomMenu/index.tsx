import styled from "styled-components";
import { useTodos } from "../../../../hooks/useTodos";
import { FilterSelector } from "../FilterSelector";

interface BottomMenuProps {
	isDesktop: boolean;
}

function BottomMenu({ isDesktop }: BottomMenuProps) {
	const { incomplete, deleteCompletedTodos } = useTodos();

	return (
		<BottomMenuContainer>
			<p>{incomplete} items left</p>

			{isDesktop && <FilterSelector />}

			<ClearDone onClick={deleteCompletedTodos}>Clear Completed</ClearDone>
		</BottomMenuContainer>
	);
}

export { BottomMenu };

const BottomMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 1rem;
	padding: 0 1rem;
`;

const ClearDone = styled.p`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.tertiaryColor};

	font-weight: 700;

	&:hover,
	&:active {
		color: ${({ theme }) => theme.colors.primaryColor};
	}
`;
