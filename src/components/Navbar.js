import { Link } from "react-router-dom";
import { Box, Button, Heading } from "grommet";
import { StatusUnknown } from "grommet-icons";
import { routes } from "../pages/routes";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import styled from "styled-components";

const Navigation = props => {
  const isLandingPage = props.location.pathname === routes.LANDING;
  const [isLarge, setIsLarge] = useState(isLandingPage);
  useEffect(() => {
    setIsLarge(props.location.pathname === routes.LANDING);
    console.log(props.location.pathname);
  }, [props.location.pathname]);
  return (
    <>
      <BackroundImage isLarge={isLarge} />
      <Logo alignSelf="center" isLarge={isLarge}>
        aske
      </Logo>
    </>
  );
};

export default withRouter(Navigation); //can be done by checking redux state

const BackroundImage = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 190;
    // if (innerWidth > 420) {
    //   // innerWidth = 800;
    //   innerHeight = 370;
    // }
    if (props.isLarge) {
      innerHeight = 435;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, [props.isLarge]);

  useEffect(() => {
    if (props.error) {
      setHeight(345);
    }
  }, [props.error]);

  return (
    <ShapeContainer width={width}>
      <Shape width={width} height={height} />
    </ShapeContainer>
  );
};

const Shape = styled.div`
  width: ${props => props.width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${props => props.height}px;
  top: -130px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
`;

const ShapeContainer = styled.div`
  overflow-x: hidden;
  width: ${props => props.width}px;
  position: absolute;
  z-index: -1;
`;

const Logo = styled(Heading)`
  color: white;
  font-size: ${props => (props.isLarge ? "95px" : "35px")};
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: ${props => (props.isLarge ? "35px" : "10px")};
  transition: 0.1s ease-out;
`;

const ErrorContainer = styled.div`
  height: ${props => props.height}px;
  transition: 0.1s ease-out;
`;

const Image = styled.img`
  position: relative;
  bottom: -50px;
  right: 30%;
  width: 160%;
  margin-top: 100px;
  opacity: 0.25;
`;

// const ImageContainer = styled.div`
//   overflow: hidden;
//   bottom: 0px;
//   position: absolute;
//   z-index: -2;
//   width: 411px;
// `;
