import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "../../components";
import { Header } from "../../components/Header";

export function HomePage() {
	return (
		<HomeContainer>
			<Header />
			<main>
				<LoginForm />
				<Link to="/signup">
					<h2>Create an account</h2>
				</Link>
			</main>
		</HomeContainer>
	);
}

const HomeContainer = styled.main`
	width: 100%;
	padding: 2rem;

	@media screen and (max-width: 850px) {
		padding: 2rem 1rem;
	}

	main {
		width: 100%;
		margin-top: 5rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`;
