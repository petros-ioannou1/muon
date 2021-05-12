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

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coordinates) {
    this.coordinates = coordinates;
  }

  dragHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeCoordinates = coordinatesFromMouseTopAndMouseLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeCoordinates);

    controller.unhighlightSquareDiv();

    controller.highlightSquareDiv(coordinates);
  }

  stopDragHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeCoordinates = coordinatesFromMouseTopAndMouseLeft(relativeMouseTop, relativeMouseLeft);

    controller.unhighlightSquareDiv();

    this.move(relativeCoordinates);
  }

  move(relativeCoordinates) {
    this.coordinates = this.coordinates.add(relativeCoordinates);

    this.applyCoordinates(this.coordinates);
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
    z-index: 1;
    position: fixed;
  }

`;

function coordinatesFromMouseTopAndMouseLeft(mouseTop, mouseLeft) {
  const squareDivWidth = controller.getSquareDivWidth(),
        squareDivHeight = controller.getSquareDivHeight(),
        x = Math.floor((mouseLeft / squareDivWidth) + HALF),
        y = Math.floor((-mouseTop / squareDivHeight) + HALF),
        coordinates = Coordinates.fromXAndY(x, y);

  return coordinates;
}
