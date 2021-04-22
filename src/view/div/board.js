"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import SquaresDiv from "../div/squares";
import BlackPiecesDiv from "../div/pieces/black";
import WhitePiecesDiv from "../div/pieces/white";

class BoardDiv extends Element {
  childElements() {
    return ([

      <SquaresDiv/>,
      <WhitePiecesDiv/>,
      <BlackPiecesDiv/>

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
