"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LabelsDiv from "../div/labels";
import SquaresDiv from "../div/squares";
import BlackPiecesDiv from "../div/pieces/black";
import WhitePiecesDiv from "../div/pieces/white";

class BoardDiv extends Element {
  enablePieceDivsPointerEvents() {
    this.enableBlackPieceDivsPointerEvents();
    this.enableWhitePieceDivsPointerEvents();
  }

  disablePieceDivsPointerEvents() {
    this.disableBlackPieceDivsPointerEvents();
    this.disableWhitePieceDivsPointerEvents();
  }

  isInverted() {
    return this.inverted;
  }

  parentContext() {
    const context = this.getContext(),
          enablePieceDivsPointerEvents = this.enablePieceDivsPointerEvents.bind(this),
          disablePieceDivsPointerEvents = this.disablePieceDivsPointerEvents.bind(this),
          parentContext = Object.assign({}, context, {
            enablePieceDivsPointerEvents,
            disablePieceDivsPointerEvents
          });

    return parentContext;
  }

  childElements() {
    return ([

      <LabelsDiv/>,
      <SquaresDiv/>,
      <WhitePiecesDiv/>,
      <BlackPiecesDiv/>

    ]);
  }

  initialise() {
    this.assignContext([
      "enableBlackPieceDivsPointerEvents",
      "enableWhitePieceDivsPointerEvents",
      "disableBlackPieceDivsPointerEvents",
      "disableWhitePieceDivsPointerEvents"
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
