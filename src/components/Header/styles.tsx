import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background-color: #f05454;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: whitesmoke;
  text-align: center;
  & > svg {
    margin-right: 3vw;
  }
`;
