import styled from "styled-components";

export const Main = styled.main`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1rem;

	padding: 2rem;

	@media screen and (max-width: 850px) {
		padding: 2rem;
	}

	@media screen and (max-width: 850px) {
		padding: 2rem 1rem;
	}
`;
