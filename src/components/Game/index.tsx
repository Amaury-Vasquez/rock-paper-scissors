import React, { ElementType, ReactElement, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Card } from "../Card";
import {ScoreBoard} from "../ScoreBoard";
import { Rock, Paper, Scissors } from "../../svg/index";
import { Container, GameBoard } from "./styles";

interface Move {
  name: string;
  icon?: ElementType;
}

export const Game = () => {
  // Variables
  const [score, setScore] = useState<number>(0);
  const [cpuMove, setCpuMove] = useState<Move>();
  const [playerMove, setPlayerMove] = useState<string>("");
  const [choosed, setChoosed] = useState<boolean>(false);
  const cardsData: Array<Move> = [{name: "rock", icon: Rock}, {name: "paper", icon: Paper}, {name: "scissors", icon: Scissors}];
  
  // Funciones
  const callback = (name: string) => {
    const randomNumber: number = randomInt(0, cardsData.length);
    setCpuMove(cardsData[randomNumber]);
    setPlayerMove(name);
    setChoosed(true);
  }

  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const playerCards = () => {
    const cards: Array<ReactElement> = [];
    const aux = cardsData.find((element) => element.name === playerMove);
    if(choosed && aux !== undefined) {
      cards.push(<Card key={0}/>);
      cards.push(<Card cover={aux?.icon} key={1}/>);
      cards.push(<Card key={2}/>);
    }
    else 
      cardsData.forEach((element, index) => cards.push(<Card name={element.name} cover={element?.icon} callback={callback} key={index}/> ))
    return cards;
  }

  const cpuCards = () => {
    const cards: Array<ReactElement> = [];
    const len: number = cardsData.length;

    for(let i = 0; i < len; i++) { 
      if(choosed && i === 1)
        cards.push(<Card cover={cpuMove?.icon} key={i} />);
      else 
        cards.push(<Card key={i}/>);
    }
    return cards;
  }

  // Efectos 
  useEffect(() => {
    if(choosed) setTimeout(() => {
      const getResult = () => {
        if(cpuMove?.name === "rock") {
          if(playerMove === "paper")
            return 1;
          else if(playerMove === "scissors")
            return -1;
        }
        else if(cpuMove?.name === "paper") {
          if(playerMove === "scissors")
            return 1;
          else if(playerMove === "rock")
            return -1;
        }
        else if(cpuMove?.name === "scissors") {
          if(playerMove === "rock")
            return 1;
          else if(playerMove === "paper")
            return -1;
        }
        return 0;
      };
      const result = getResult();
      if(result < 0) Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Has perdido!',
        showConfirmButton: false,
        timer: 1500
      });
      else if(result > 0) Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Has ganado!',
        showConfirmButton: false,
        timer: 1000
      })
      setChoosed(false);
      setScore(() => score + result);
    }, 1500)
  }, [choosed, score, cpuMove, playerMove])
  
  return (
    <Container>
      <ScoreBoard score={score} callback={() => {
        setChoosed(false);
        setScore(0);
        setPlayerMove("");
      }} />
      <GameBoard>
        {playerCards()}
        {cpuCards()}
      </GameBoard>
    </Container>
    
  );
};
