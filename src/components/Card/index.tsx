import React, { ElementType} from "react";

import { Div } from "./styles";
import { Question } from "../../svg/index";

interface CardProps {
  cover?: ElementType;
  callback?: (name:string) => void | undefined;
  name?: string | undefined;
}

export const Card = (props: CardProps) => {
  return <Div onClick={() => {
    if(props.callback !== undefined) props.callback(props.name !== undefined ? props.name : "");
  }} >{props.cover ? <props.cover /> : <Question />}</Div>;
};
