"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LabelsDiv from "../div/labels";
import SquaresDiv from "../div/squares";
import BlackPiecesDiv from "../div/pieces/black";
import WhitePiecesDiv from "../div/pieces/white";

class BoardSection extends Element {
  childElements() {
    const { inverted } = this.properties;

    return ([

      <LabelsDiv inverted={inverted} />,
      <SquaresDiv inverted={inverted} />,
      <WhitePiecesDiv inverted={inverted} />,
      <BlackPiecesDiv inverted={inverted} />

    ]);
  }

  static tagName = "section";

  static ignoredProperties = [
    "inverted"
  ];

  static defaultProperties = {
    className: "board"
  };
}

export default withStyle(BoardSection)`

  overflow: visible;
  position: relative;
  grid-area: board-section;
      
`;
