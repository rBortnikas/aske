import { Heading } from "grommet";
import { routes } from "../pages/routes";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = state => {
  return {
    sessionNameInputError: state.UI.sessionNameInputError
  };
};

const Navigation = props => {
  const isLandingPage = props.location.pathname === routes.LANDING;
  const [isLarge, setIsLarge] = useState(isLandingPage);
  useEffect(() => {
    setIsLarge(props.location.pathname === routes.LANDING);
    console.log(props.location.pathname);
  }, [props.location.pathname]);
  return (
    <>
      <BackroundImage isLarge={isLarge} error={props.sessionNameInputError} />
      <Logo alignSelf="center" isLarge={isLarge}>
        aske
      </Logo>
    </>
  );
};

export default connect(mapStateToProps)(withRouter(Navigation)); //can be done by checking redux state

const BackroundImage = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 190;
    if (props.isLarge) {
      innerHeight = 435;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, [props.isLarge]);

  useEffect(() => {
    if (props.error) {
      setHeight(475);
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
