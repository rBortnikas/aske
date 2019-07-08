import { routes } from "../pages/routes";
import { withRouter, RouteProps } from "react-router";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ReduxState } from "../interfaces/store";

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
}

interface ShapeContainerProps {
  width: number;
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

export default
  withRouter(connect(mapStateToProps, null)(Header) as any); //can be done by checking redux state

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
    <ShapeContainer width={width}>
      <Shape width={width} height={height} />
    </ShapeContainer>
  );
};

const Shape = styled.div`
  width:  ${(props: ShapeProps) => props.width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${(props: ShapeProps) => props.height}px;
  top: -130px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
`;

const ShapeContainer = styled.div`
  overflow-x: hidden;
  width: ${(props: ShapeContainerProps) => props.width}px;
  position: absolute;
  z-index: -1;
`;

const Logo = styled.h1`
  color: white;
  font-size: ${(props: LogoProps) => (props.isLarge ? "95px" : "35px")};
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: ${(props: LogoProps) => (props.isLarge ? "35px" : "20px")};
  transition: 0.1s ease-out;
`;
