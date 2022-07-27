import styled from "styled-components";
import { useTheme } from "../../providers/ThemeProvider";
import sunImg from "../../images/icon-sun.svg";
import moonImg from "../../images/icon-moon.svg";
import { useAuth } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

export function Header() {
	const { toggleTheme, theme } = useTheme();
	const { isAuthenticated, handleLogout } = useAuth();

	return (
		<HeaderContainer>
			<Link to="/" style={{ textDecoration: "none" }}>
				<Title>TODO</Title>
			</Link>

			{isAuthenticated && <button onClick={handleLogout}>Logout</button>}

			{theme === "dark" ? (
				<ThemeButton onClick={toggleTheme}>
					<img src={sunImg} alt="sun-icon" />
				</ThemeButton>
			) : (
				<ThemeButton onClick={toggleTheme}>
					<img src={moonImg} alt="moon-icon" />
				</ThemeButton>
			)}
		</HeaderContainer>
	);
}

const Title = styled.h1`
	font-weight: 900;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primaryColor};
	letter-spacing: 0.5rem;
	line-height: 100%;
`;

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	max-width: 45rem;
	margin: 0 auto;
`;

const ThemeButton = styled.button`
	background-color: inherit;
	border: 0;
	cursor: pointer;

	img {
		width: 1.5rem;
		height: 1.5rem;
	}
`;
