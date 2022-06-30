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

	background-color: ${({ isActive }) => (isActive ? "purple" : "inherit")};

	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
	}

	&:hover {
		border: solid 2px ${({ theme }) => theme.colors.brightBlue};
	}
`;
