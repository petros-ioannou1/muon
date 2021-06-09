"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceBackgroundDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "piece-background"
  };
}

export default withStyle(PieceBackgroundDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  opacity: 0;
  position: absolute;
  
`;
