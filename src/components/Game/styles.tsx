import styled from "styled-components";

export const Container = styled.div`
  min-height: 92vh;
  display: block;
  width: 100vw;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #ce6262;
  & > svg {
    font-size: 24px;
    color: whitesmoke;
    display: flex;
    margin: 0 auto;
  }
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
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
