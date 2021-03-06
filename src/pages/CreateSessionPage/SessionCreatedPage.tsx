import React from "react";
import styled from "styled-components";
import TextInput from '../../components/TextInputs/TextInput';
import ActionButton from "../../components/ActionButton";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { Heading } from "grommet";

interface Props {
  sessionName: string;
}

export default function SessionCreatedPage(props: Props) {
  const { sessionName } = props;
  return (
    <Container>
      <Title>People may now join the room by visiting</Title>
      <Heading level={2}>
        <Link to={`${routes.SESSION}/${sessionName}`}>
          www.aske.ly/session/{sessionName}
        </Link>
      </Heading>
      <Heading level={3}>or</Heading>
      <Heading level={2}>
        <Link to="">www.aske.ly</Link>
      </Heading>
      <Heading level={3}>and entering</Heading>
      <Background>
        <Heading level={2}>{sessionName}</Heading>
      </Background>
      <Heading level={3}>
        Afraid of forgetting? Send these details to yourself
      </Heading>
      <TextInput
        placeholder="your@email.com"
        border
      />
      <Spacer />
      <ActionButton
        label="Send"
        color="#686DFF"
        onClick={() => alert("work in progress :)")}
      />
    </Container>
  );
}

const Title = styled.h3`
  margin-top: 40px;
`;

const Container = styled.div`
  margin: 0 20px 0 20px;
`;

const Background = styled.div`
  padding: 10px;
  background-color: #b9b9b9;
  border-radius: 15px;
`;

const Spacer = styled.div`
  height: 10px;
`