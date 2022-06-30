import styled from "styled-components";
import { useTodos } from "../../../../hooks/useTodos";

function Summary() {
	const {
		incomplete,
		todosListOptions,
		handleChangeTodosListOptions,
		deleteCompletedTodos,
	} = useTodos();

	return (
		<SummaryContainer>
			<p>{incomplete} items left</p>

			<FiltersContainer>
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
