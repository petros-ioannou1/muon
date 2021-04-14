"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import PiecesDiv from "../div/pieces";
import SquaresDiv from "../div/squares";

class BoardDiv extends Element {
  childElements() {
    return ([

      <PiecesDiv/>,
      <SquaresDiv/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "board"
  };
}

export default withStyle(BoardDiv)`

  position: relative;
  grid-area: board-div;
      
`;
