import React, { useEffect } from "react";
import styled from "styled-components";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import { TextArea } from "grommet";

export default function MessageInput() {
  return (
    <Wrapper>
      <MessageTextArea placeholder="type here" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 40;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
`;

const MessageTextArea = styled(TextArea)`
  background-color: white;
  border: 2px solid #08126c;
  margin-bottom: 16px;
  margin-top: 10px;
  width: 80%;
  height: 100px;
  position: fixed;
  bottom: 70px;
`;
