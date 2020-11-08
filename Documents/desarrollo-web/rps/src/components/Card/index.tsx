import React, { ElementType, useState } from "react";

import { Div } from "./styles";
import { Question } from "../../svg/index";

interface CardProps {
  cover: ElementType;
  active?: boolean;
}

export const Card = (props: CardProps) => {
  const [active, setActive] = useState(props.active);
  return <Div>{active === true ? <props.cover /> : <Question />}</Div>;
};
