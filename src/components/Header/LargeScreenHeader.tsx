import React from "react";
import styled from "styled-components";

interface Props {
  expanded?: boolean;
  error?: boolean;
}

export default function LargeScreenHeader({ expanded, error }: Props) {
  return (
    <Wrapper>
      <TopBar expanded={expanded} />
      <MidBar expanded={expanded}>
        <LeftFillet expanded={expanded} />
        <RightFillet expanded={expanded} />
      </MidBar>
      <BottomBar expanded={expanded} error={error} />
    </Wrapper>
  );
}

function getBottomBarSize(expanded?: boolean, error?: boolean) {
  if (error) return 115;
  if (expanded) return 75;
  return 0;
}

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: absolute;
  z-index: -1;
  align-items: center;
  flex-direction: column;
`;

const TopBar = styled.div`
  height: ${({ expanded }: Props) => (expanded ? 120 : 60)}px;
  width: 100vw;
  background-color: #08126c;
  transition: 0.1s ease-out;
`;
const MidBar = styled.div`
  height: ${({ expanded }: Props) => (expanded ? 120 : 0)}px;
  width: 640px;
  background-color: #08126c;
  display: flex;
  justify-content: space-between;
  transition: 0.1s ease-out;
`;
const BottomBar = styled.div`
  height: ${({ expanded, error }: Props) =>
    getBottomBarSize(expanded, error)}px;
  width: 400px;
  background-color: #08126c;
  border-bottom-right-radius: 60px;
  border-bottom-left-radius: 60px;
  transition: 0.1s ease-out;
`;

const LeftFillet = styled.div`
  height: ${({ expanded }: Props) => (expanded ? 120 : 0)}px;
  width: 120px;
  border-top-right-radius: 60px;
  background-color: white;
  transition: 0.1s ease-out;
`;

const RightFillet = styled.div`
  height: ${({ expanded }: Props) => (expanded ? 120 : 0)}px;
  width: 120px;
  border-top-left-radius: 60px;
  background-color: white;
  transition: 0.1s ease-out;
`;
