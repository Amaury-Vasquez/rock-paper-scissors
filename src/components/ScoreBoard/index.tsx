import React from "react";
import {VscDebugRestart} from "react-icons/vsc";

import {Div} from "./styles";

export const ScoreBoard = (props: {score: number, callback: () => void }) => {
  return <Div>
    <p> {`Puntuacion: ${props.score}`} </p>
    <VscDebugRestart onClick={() => {
      props.callback();
    }} />
  </Div>;
}