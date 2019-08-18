import React from "react";
import styled, { css } from "styled-components";

interface Props {
  screenSize: string;
  children?: React.ReactNode;
}

export default function ImageContainer({ screenSize, children }: Props) {
  return <Container screenSize={screenSize}>{children}</Container>;
}

const Container = styled.div`
  overflow: hidden;
  bottom: 0px;
  position: fixed;
  z-index: -2;
  width: 100%;
  transform: translateY(50%);
  ${({ screenSize }: Props) =>
    screenSize === "small" &&
    css`
      transform: translateY(10%);
    `};
`;
