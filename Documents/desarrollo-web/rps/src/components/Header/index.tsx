import * as React from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import { Header as HeaderContainer, Title } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        {"Rock"} <FaHandRock />
        {" Paper"} <FaHandPaper />
        {" Scissors"} <FaHandScissors />
      </Title>
    </HeaderContainer>
  );
};
