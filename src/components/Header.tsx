import { routes } from "../pages/routes";
import { withRouter, RouteProps } from "react-router";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { ReduxState } from "../interfaces/store";
import { ResponsiveContext } from "grommet";

const mapStateToProps = (state: ReduxState) => {
  return {
    sessionNameInputError: state.UI.sessionNameInputError
  };
};

type HeaderProps = ReturnType<typeof mapStateToProps> &
  RouteProps &
  ShapeProps &
  ShapeContainerProps;

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

const Header = (props: HeaderProps) => {
  const isLandingPage = props.location
    ? props.location.pathname === routes.LANDING
    : false;
  const [isLarge, setIsLarge] = useState(isLandingPage);
  useEffect(() => {
    setIsLarge(
      props.location ? props.location.pathname === routes.LANDING : false
    );
  }, [props.location]);
  return (
    <>
      <BackgroundImage isLarge={isLarge} error={props.sessionNameInputError} />
      <Logo isLarge={isLarge}>aske</Logo>
    </>
  );
};

const BackgroundImage = (props: BackgroundImageProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 190;
    if (props.isLarge) {
      innerHeight = 415;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, [props.isLarge]);

  useEffect(() => {
    if (props.error) {
      setHeight(460);
    }
  }, [props.error]);

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
  width: ${(props: ShapeProps) => props.width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${(props: ShapeProps) => props.height}px;
  top: -130px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
  ${(props: ShapeProps) =>
    props.screenSize === "large" &&
    css`
      width: 800px;
      right: 0;
    `};
`;

const ShapeContainer = styled.div`
  overflow-x: hidden;
  width: ${(props: ShapeContainerProps) => props.width}px;
  position: absolute;
  z-index: -1;
  ${(props: ShapeContainerProps) =>
    props.screenSize === "large" &&
    css`
      max-width: 800px;
    `};
`;

const Logo = styled.h1`
  color: white;
  font-size: ${(props: LogoProps) => (props.isLarge ? "95px" : "35px")};
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: ${(props: LogoProps) => (props.isLarge ? "35px" : "20px")};
  transition: 0.1s ease-out;
`;

export default withRouter(connect(
  mapStateToProps,
  null
)(Header) as any);
