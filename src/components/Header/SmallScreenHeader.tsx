import React from "react";
import styled from "styled-components";

interface Props {
  expanded: boolean;
  error: boolean;
}

export default function SmallScreenHeader({ expanded, error }: Props) {
  return (
    <ShapeContainer>
      <Shape expanded={expanded} error={error} />
    </ShapeContainer>
  );
}

function getShapeHeight(expanded: boolean, error: boolean) {
  if (error) return 460;
  if (expanded) return 415;
  return 190;
}
const Shape = styled.div`
  width: ${window.innerWidth + 100}px;
  left: -50px;
  background-color: #08126c;
  height: ${({ expanded, error }: Props) => getShapeHeight(expanded, error)}px;
  top: -130px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
`;

const ShapeContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: absolute;
  z-index: -1;
`;
