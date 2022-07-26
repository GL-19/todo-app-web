import styled from "styled-components";
import deleteIcon from "../../../../images/icon-cross.svg";

interface DeleteIconProps {
	onClick: () => void;
}

export function DeleteIcon({ onClick }: DeleteIconProps) {
	return <DeleteIconContainer src={deleteIcon} alt="delete" onClick={onClick} />;
}

const DeleteIconContainer = styled.img`
	cursor: pointer;

	width: 1.33rem;
	height: 1.33rem;

	&:hover,
	&:active {
		opacity: 0.5;
	}
`;
