import styled from "styled-components";
import checkIcon from "../../../images/icon-check.svg";

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
	width: 2rem;
	height: 2rem;
	border-radius: 100%;
	border: solid 1px white;

	background-color: ${({ isActive }) => (isActive ? "purple" : "inherit")};

	img {
		width: 100%;
		height: 100%;
	}
`;
