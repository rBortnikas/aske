import { routes } from "../../pages/routes";
import { withRouter, RouteProps } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReduxState } from "../../interfaces/store";
import { ResponsiveContext } from "grommet";
import LargeScreenHeader from "./LargeScreenHeader";
import SmallScreenHeader from "./SmallScreenHeader";

interface HeaderShapeProps {
  error: boolean;
  expanded: boolean;
}

interface LogoProps {
  expanded: boolean;
}

const Header = ({ location }: RouteProps) => {
  const sessionNameInputError = useSelector(
    (state: ReduxState) => state.UI.sessionNameInputError
  );
  const isLandingPage = !!(location && location.pathname === routes.LANDING);
  return (
    <>
      <HeaderShape error={sessionNameInputError} expanded={isLandingPage} />
      <Logo expanded={isLandingPage}>aske</Logo>
    </>
  );
};

const HeaderShape = ({ expanded, error }: HeaderShapeProps) => {
  return (
    <ResponsiveContext.Consumer>
      {screenSize =>
        screenSize === "small" ? (
          <SmallScreenHeader expanded={expanded} error={error} />
        ) : (
          <LargeScreenHeader expanded={expanded} error={error} />
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const Logo = styled.h1`
  color: white;
  font-size: ${({ expanded }: LogoProps) => (expanded ? 95 : 35)}px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: ${({ expanded }: LogoProps) => (expanded ? 35 : 20)}px;
  transition: 0.1s ease-out;
`;

export default withRouter(Header as any);
