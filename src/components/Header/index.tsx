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
			<div>
				{isAuthenticated && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}

				{theme === "dark" ? (
					<ThemeButton onClick={toggleTheme}>
						<img src={sunImg} alt="sun-icon" />
					</ThemeButton>
				) : (
					<ThemeButton onClick={toggleTheme}>
						<img src={moonImg} alt="moon-icon" />
					</ThemeButton>
				)}
			</div>
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

const ThemeButton = styled.button`
	background-color: inherit;
	border: none;
	cursor: pointer;

	img {
		width: 1.5rem;
		height: 1.5rem;
	}
`;

const LogoutButton = styled.button`
	height: 100%;

	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primaryColor};
	background-color: inherit;
	border: none;
	cursor: pointer;
`;

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	max-width: 45rem;
	margin: 0 auto;

	${ThemeButton} {
		margin-left: 1rem;
	}
`;
