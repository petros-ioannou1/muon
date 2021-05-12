"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import Coordinates from "../../coordinates";
import draggableMixins from "../../mixins/draggable";
import coordinatesMixins from "../../mixins/coordinates";

import { HALF } from "../../constants";
import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  dragHandler(relativeMouseTop, relativeMouseLeft) {
    let coordinates = coordinatesFromRelativeMouseTopAndRelativeMouseLeft(relativeMouseTop, relativeMouseLeft);

    coordinates = coordinates.add(this.coordinates);

    controller.unhighlightSquareDiv();

    controller.highlightSquareDiv(coordinates);
  }

  stopDragHandler(relativeMouseTop, relativeMouseLeft) {
    let coordinates = coordinatesFromRelativeMouseTopAndRelativeMouseLeft(relativeMouseTop, relativeMouseLeft);

    coordinates = coordinates.add(this.coordinates);

    controller.unhighlightSquareDiv();
  }

  didMount() {
    this.applyCoordinates(this.coordinates);

    this.onDrag(this.dragHandler, this);

    this.onStopDrag(this.stopDragHandler, this);

    this.enableDragging();
  }

  willUnmount() {
    this.disableDragging();

    this.offStopDrag(this.stopDragHandler, this);

    this.offDrag(this.dragHandler, this);
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

Object.assign(PieceDiv.prototype, draggableMixins);
Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
  .dragging {
    position: fixed;
    z-index: 10000;
  }

`;

function coordinatesFromRelativeMouseTopAndRelativeMouseLeft(relativeMouseTop, relativeMouseLeft) {
  const squareDivWidth = controller.getSquareDivWidth(),
        squareDivHeight = controller.getSquareDivHeight(),
        x = Math.floor((relativeMouseLeft / squareDivWidth) + HALF),
        y = Math.floor((-relativeMouseTop / squareDivHeight) + HALF),
        coordinates = Coordinates.fromXAndY(x, y);

  return coordinates;
}