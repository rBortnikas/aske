import { routes } from "../pages/routes";
import { withRouter, RouteProps } from "react-router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { ReduxState } from "../interfaces/store";
import { ResponsiveContext } from "grommet";

type HeaderProps = RouteProps & ShapeProps & ShapeContainerProps;

interface BackgroundImageProps {
  isLarge: boolean;
  error: boolean;
}

interface ShapeProps {
  width: number;
  height: number;
  screenSize: string;
}

interface ShapeContainerProps {
  width: number;
  screenSize: string;
}

interface LogoProps {
  isLarge: boolean;
}

const Header = ({ location }: HeaderProps) => {
  const sessionNameInputError = useSelector(
    (state: ReduxState) => state.UI.sessionNameInputError
  );
  const isLandingPage = location ? location.pathname === routes.LANDING : false;
  const [isLarge, setIsLarge] = useState(isLandingPage);
  useEffect(() => {
    setIsLarge(location ? location.pathname === routes.LANDING : false);
  }, [location]);
  return (
    <>
      <BackgroundImage isLarge={isLarge} error={sessionNameInputError} />
      <Logo isLarge={isLarge}>aske</Logo>
    </>
  );
};

const BackgroundImage = ({ isLarge, error }: BackgroundImageProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 190;
    if (isLarge) {
      innerHeight = 415;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, [isLarge]);

  useEffect(() => {
    if (error) {
      setHeight(460);
    }
  }, [error]);

  return (
    <ResponsiveContext.Consumer>
      {screenSize => (
        <ShapeContainer width={width} screenSize={screenSize}>
          <Shape width={width} height={height} screenSize={screenSize} />
        </ShapeContainer>
      )}
    </ResponsiveContext.Consumer>
  );
};

const Shape = styled.div`
  width: ${({ width }: ShapeProps) => width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${({ height }: ShapeProps) => height}px;
  top: -130px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
  ${({ screenSize }: ShapeProps) =>
    screenSize === "large" &&
    css`
      width: 800px;
      right: 0;
    `};
`;

const ShapeContainer = styled.div`
  overflow-x: hidden;
  width: ${({ width }: ShapeContainerProps) => width}px;
  position: absolute;
  z-index: -1;
  ${({ screenSize }: ShapeContainerProps) =>
    screenSize === "large" &&
    css`
      max-width: 800px;
    `};
`;

const Logo = styled.h1`
  color: white;
  font-size: ${({ isLarge }: LogoProps) => (isLarge ? "95px" : "35px")};
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: ${({ isLarge }: LogoProps) => (isLarge ? "35px" : "20px")};
  transition: 0.1s ease-out;
`;

export default withRouter(Header as any);
