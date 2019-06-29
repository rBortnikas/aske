import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import styled from "styled-components";
import { Heading } from "grommet";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import { createPortal } from "react-dom";

export function MessageInput() {
  return <div>d</div>;
}
