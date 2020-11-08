import styled from "styled-components";

import { fadeIn } from "../../styles/animation";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 14vw;
  border-radius: 5px;
  background-color: rgba(256, 256, 256, 0.8);
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  & > svg {
    ${fadeIn()};
    width: auto;
    height: 25vh;
  }
`;
