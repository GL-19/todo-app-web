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

			<p onClick={deleteCompletedTodos}>Clear Completed</p>
		</BottomMenuContainer>
	);
}

export { BottomMenu };

const BottomMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		cursor: pointer;
	}
`;
