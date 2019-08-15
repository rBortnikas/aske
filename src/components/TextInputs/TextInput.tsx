import React from "react";
import styled from "styled-components";


interface Props {
  onPressEnter?: () => void;
  onChange?: (e: any) => void;
  value?: string;
  placeholder?: string;
  border?: boolean | undefined;
  className?: any;
}

interface StyledInputProps {
  border?: boolean | undefined;
}

export default function TextInput(props: Props) {

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      props.onPressEnter && props.onPressEnter();
    }
  }

  return (
    <StyledInput
      type='text'
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      onKeyPress={handleKeyPress}
      border={props.border}
      className={props.className}
    />
  )
}

const StyledInput = styled.input`
  outline: none;
  padding: 15px;
  border: none;
  font-size: 16px;
  border-radius: 13px;
  border: 2px solid ${({ border }: StyledInputProps) => border ? '#1c2578' : 'white'};

  &:focus {
    border: 2px #1E90FF solid;
  }
`
