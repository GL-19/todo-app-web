import styled from "styled-components";
import { FilterSelector } from "../FilterSelector";

export function FilterMenu() {
	return (
		<FilterMenuContainer>
			<FilterSelector />
		</FilterMenuContainer>
	);
}

const FilterMenuContainer = styled.div``;
