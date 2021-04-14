"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackKingSVG from "../svg/black/king";
import positionMixins from "../../mixins/position";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  didMount() {
    const { coordinates } = this.properties,
          top = coordinates.getTop(),
          left = coordinates.getLeft();

    this.setTop(top);
    this.setLeft(left);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackKingSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "piece"
  };
}

Object.assign(PieceDiv.prototype, positionMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
