import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  label: string;
  color?: string;
}

interface StyledButtonProps {
  color?: string;
}
export default function ActionButton({ color, label, onClick }: Props) {

  return (
    <StyledButton onClick={onClick} color={color}>{label}</StyledButton>
  )
}

const StyledButton = styled.button`
  background: ${({ color }: StyledButtonProps) => color ? color : '#00DD95'};
  outline:0;
  border: 2px white solid;
  border-radius: 13px;
  color: white;
  padding: 15px 25px;
  font-size: 20px;
  &:focus {
    border: 2px #1E90FF solid;
  }
`;
