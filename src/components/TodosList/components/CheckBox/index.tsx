import styled from "styled-components";
import checkIcon from "../../../../images/icon-check.svg";

interface CheckBoxProps {
	isActive: boolean;
	onClick: () => void;
}

export function CheckBox({ isActive, onClick }: CheckBoxProps) {
	return (
		<CheckboxContainer onClick={onClick} isActive={isActive}>
			{isActive && <img src={checkIcon} alt="" />}
		</CheckboxContainer>
	);
}

interface CheckboxContainerProps {
	isActive: boolean;
}

const CheckboxContainer = styled.div<CheckboxContainerProps>`
	width: 1.33rem;
	height: 1.33rem;
	border-radius: 100%;
	border: solid 1px ${({ theme }) => theme.colors.tertiaryColor};

	display: flex;
	justify-content: center;
	align-items: center;

	background: no-repeat
		${({ isActive, theme }) =>
			isActive
				? `linear-gradient(to left top, ${theme.colors.purple}, ${theme.colors.cyan})`
				: "inherit"};

	cursor: pointer;

	img {
		width: 50%;
		height: 50%;
	}

	&:hover {
		border: solid 2px
			${({ theme, isActive }) => (isActive ? "none" : theme.colors.brightBlue)};
	}
`;
