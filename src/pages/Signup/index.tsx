import styled from "styled-components";
import { CreateAccountForm, Header } from "../../components";

export function SignupPage() {
	return (
		<SignupContainer>
			<Header />
			<main>
				<CreateAccountForm />
			</main>
		</SignupContainer>
	);
}

const SignupContainer = styled.main`
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
	}
`;
