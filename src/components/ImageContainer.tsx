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
  width: 411px;
  ${({ screenSize }: Props) =>
    screenSize === "medium" &&
    css`
      width: 100%;
      //   left: 50%;
      transform: translateY(50%);
    `};
`;
