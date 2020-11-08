import React from "react";

import { Card } from "../Card";
import { Rock, Paper, Scissors } from "../../svg/index";
import { Container, GameBoard } from "./styles";

export const Game = () => {
  return (
    <Container>
      <GameBoard>
        <Card cover={Rock} />
        <Card cover={Paper} />
        <Card cover={Scissors} />
        <Card cover={Rock} />
        <Card cover={Paper} />
        <Card cover={Scissors} />
      </GameBoard>
    </Container>
  );
};
