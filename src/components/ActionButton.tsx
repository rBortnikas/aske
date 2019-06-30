import styled from "styled-components";
import { Button } from "grommet";

const ActionButton = styled(Button)`
  border: 3px solid white;
  margin: 0 5px 0 5px;
  padding: 12px 25px 12px 25px;
  font-size: 25px;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    box-shadow: none;
  }
  /* transition: 0.1s; */
`;

export default ActionButton;
