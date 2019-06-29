import styled from "styled-components";

const BottomBar = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: center;
  bottom: 0px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  padding: 20px 0 20px 0;
  z-index: 41;
`;

export default BottomBar;
