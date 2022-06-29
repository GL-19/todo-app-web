import styled from "styled-components";
import { useTodos } from "../../../../hooks/useTodos";

function Summary() {
	const {
		incomplete,
		todosFilterOption,
		handleChangeTodosFilterOption,
		deleteCompletedTodos,
	} = useTodos();

	return (
		<SummaryContainer>
			<p>{incomplete} items left</p>

			<FiltersContainer>
				<FilterOption
					onClick={() => handleChangeTodosFilterOption("all")}
					isActive={todosFilterOption === "all"}
				>
					All
				</FilterOption>

				<FilterOption
					onClick={() => handleChangeTodosFilterOption("incomplete")}
					isActive={todosFilterOption === "incomplete"}
				>
					Active
				</FilterOption>

				<FilterOption
					onClick={() => handleChangeTodosFilterOption("done")}
					isActive={todosFilterOption === "done"}
				>
					Completed
				</FilterOption>
			</FiltersContainer>

			<p onClick={deleteCompletedTodos}>Clear Completed</p>
		</SummaryContainer>
	);
}

export { Summary };

interface FilterOptionProps {
	isActive: boolean;
}

const FilterOption = styled.p<FilterOptionProps>`
	color: ${({ isActive }) => (isActive ? "blue" : "black")};
`;

const SummaryContainer = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		cursor: pointer;
	}
`;

const FiltersContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
