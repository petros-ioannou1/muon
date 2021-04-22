"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import coordinatesMixins from "../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  didMount() {
    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "piece"
  };

  static fromClass(Class, properties) {
    const { coordinates } = properties,
          pieceDiv = Element.fromClass(Class, properties, coordinates);

    return pieceDiv;

  }
}

Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
