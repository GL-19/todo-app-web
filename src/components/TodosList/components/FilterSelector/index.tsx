import styled from "styled-components";
import { useTodos } from "../../../../hooks/useTodos";

export function FilterSelector() {
	const { todosListOptions, handleChangeTodosListOptions } = useTodos();

	return (
		<FiltersSelectorContainer>
			<FilterOption
				onClick={() => handleChangeTodosListOptions("all")}
				isActive={todosListOptions === "all"}
			>
				All
			</FilterOption>

			<FilterOption
				onClick={() => handleChangeTodosListOptions("incomplete")}
				isActive={todosListOptions === "incomplete"}
			>
				Active
			</FilterOption>

			<FilterOption
				onClick={() => handleChangeTodosListOptions("done")}
				isActive={todosListOptions === "done"}
			>
				Completed
			</FilterOption>
		</FiltersSelectorContainer>
	);
}

const FiltersSelectorContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

interface FilterOptionProps {
	isActive: boolean;
}

const FilterOption = styled.p<FilterOptionProps>`
	cursor: pointer;
	color: ${({ isActive, theme }) =>
		isActive ? theme.colors.brightBlue : theme.colors.secondaryColor};

	font-weight: 700;

	&:hover,
	&:active {
		color: ${({ isActive, theme }) =>
			isActive ? theme.colors.brightBlue : theme.colors.primaryColor};
	}
`;
