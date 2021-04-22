"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackKingSVG from "../svg/black/king";
import coordinatesMixins from "../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
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

Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
