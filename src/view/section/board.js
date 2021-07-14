"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LabelsDiv from "../div/labels";
import SquaresDiv from "../div/squares";
import BlackPiecesDiv from "../div/pieces/black";
import WhitePiecesDiv from "../div/pieces/white";

class BoardSection extends Element {
  isInverted() {
    return this.inverted;
  }

  childElements() {
    return ([

      <LabelsDiv/>,
      <SquaresDiv/>,
      <WhitePiecesDiv/>,
      <BlackPiecesDiv/>

    ]);
  }

  static tagName = "section";

  static defaultProperties = {
    className: "board"
  };
}

export default withStyle(BoardSection)`

  overflow: visible;
  position: relative;
  grid-area: board-section;
      
`;
