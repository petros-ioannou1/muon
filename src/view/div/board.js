"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LabelsDiv from "../div/labels";
import SquaresDiv from "../div/squares";
import BlackPiecesDiv from "../div/pieces/black";
import WhitePiecesDiv from "../div/pieces/white";

class BoardDiv extends Element {
  childElements() {
    return ([

      <LabelsDiv/>,
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

  overflow: visible;
  position: relative;
  grid-area: board-div;
      
`;
