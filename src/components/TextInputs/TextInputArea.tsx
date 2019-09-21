import React from "react";
import styled from "styled-components";

interface Props {
  onPressEnter?: () => void;
  onChange?: (e: any) => void;
  value?: string;
  placeholder?: string;
  className?: any;
}

export default function TextInputArea(props: Props) {
  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      props.onPressEnter && props.onPressEnter();
    }
  }

  return (
    <StyledInput
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      onKeyPress={handleKeyPress}
      className={props.className}
      data-testid="text-input-area"
    />
  );
}

const StyledInput = styled.textarea`
  outline: none;
  padding: 15px;
  border: none;
  font-size: 16px;
  border-radius: 13px;
  border: 2px solid "#1c2578";

  &:focus {
    border: 2px #1e90ff solid;
  }
`;
