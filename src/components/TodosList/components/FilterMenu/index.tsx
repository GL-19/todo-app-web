import styled from "styled-components";
import { FilterSelector } from "../FilterSelector";

export function FilterMenu() {
	return (
		<FilterMenuContainer>
			<FilterSelector />
		</FilterMenuContainer>
	);
}

const FilterMenuContainer = styled.div`
	margin: 0 auto;
	margin-top: 1rem;
	max-width: 900px;
	min-width: 40rem;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 850px) {
		min-width: 25rem;
		padding: 1.25rem;
	}

	@media screen and (max-width: 450px) {
		min-width: 15rem;
		padding: 0.5rem;
	}
`;
