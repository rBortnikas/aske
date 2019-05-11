import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../pages/routes";

const Navigation = () => (
  <>
    <Link to={ROUTES.LANDING}>Landing page</Link>
    <Link to={ROUTES.TEST}>Test page</Link>
  </>
);

export default Navigation;
