import styled from "styled-components";

export const Container = styled.div`
  min-height: 92vh;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #ce6262;
`;

export const GameBoard = styled.div`
  height: 100%;
  display: grid;
  width: 60vw;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
  grid-gap: 5vw;
`;
