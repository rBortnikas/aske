import React from "react";
import styled from "styled-components";
import { TextInput } from "grommet";
import ActionButton from "../../components/ActionButton";
import { routes } from "../routes";
import { Link } from "react-router-dom";

interface Props {
  sessionName: string;
}

function SessionCreatedPage(props: Props) {
  const { sessionName } = props;
  return (
    <>
      <Title>People may now join the room by visiting</Title>
      <h2>
        <Link to={`${routes.SESSION}/${sessionName}`}>
          www.aske.ly/session/{sessionName}
        </Link>
      </h2>
      <h3>or</h3>
      <h2>
        <Link to="">www.aske.ly</Link>
      </h2>
      <h3>and entering</h3>
      <h2>{sessionName}</h2>
      <h3>Afraid of forgetting? Send these details to yourself</h3>
      <InputField
        focusIndicator={false}
        // value={sessionInfoText}
        // onChange={e => { }}
        placeholder="your@email.com"
        size="large"
      />
      <ActionButton
        label="Send"
        color="#686DFF"
        primary
        focusIndicator={false}
        onClick={() => alert("work in progress :)")}
      />
    </>
  );
}

export default SessionCreatedPage;

const Title = styled.h3`
  margin-top: 40px;
`;

const InputField = styled(TextInput)`
  background-color: white;
  border: 2px solid #08126c;
  margin-bottom: 16px;
  margin-top: 10px;
`;
