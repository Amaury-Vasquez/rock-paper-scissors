import styled from "styled-components";

export const Div = styled.div`
  height: 8vh;
  width: auto;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  & > * {
    font-size: 20px;
    margin-right: 5vw;
    color: whitesmoke;
  }
  & > svg:hover {
    transform: scale(1.5);
  }
`
