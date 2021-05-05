"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import coordinatesMixins from "../../mixins/coordinates";
import dragAndDropMixins from "../../mixins/dragAndDrop";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  didMount() {
    this.applyCoordinates(this.coordinates);

    this.onMouseDown(this.mouseDownHandler, this);
  }

  willUnmount() {
    this.offMouseDown(this.mouseDownHandler, this);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "piece"
  };

  static fromClass(Class, properties) {
    const { coordinates } = properties,
          pieceDiv = Element.fromClass(Class, properties, coordinates);

    pieceDiv.initialise();

    return pieceDiv;

  }
}

Object.assign(PieceDiv.prototype, coordinatesMixins);
Object.assign(PieceDiv.prototype, dragAndDropMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
  .dragging {
    position: fixed;
    z-index: 10000;
  }

`;
