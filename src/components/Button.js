import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import styled from "styled-components";

import image from "C:/Users/Rokas/Desktop/chat_app/chat_app/src/peopleDancing.jpg";
import * as ROUTES from "../pages/routes";
import { Box, ResponsiveContext, Heading, TextInput } from "grommet";

export function Button() {

  return (

  )
}

const ButtonShape = styled.div`
  
`