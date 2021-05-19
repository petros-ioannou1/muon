"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import Coordinates from "../../coordinates";
import draggableMixins from "../../mixins/draggable";
import coordinatesMixins from "../../mixins/coordinates";

import { yFromTop, xFromLeft } from "../../utilitites/coordinates";
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
    const relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeMouseCoordinates);

    controller.unhighlightSquareDiv();

    controller.highlightSquareDiv(coordinates);
  }

  stopDragHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeMouseCoordinates),
          coordinatesValid = coordinates.areValid();

    coordinatesValid ?
      this.move(coordinates) :
        this.move(this.coordinates);

    controller.unhighlightSquareDiv();
  }

  mouseOutHandler(event, element) {
    controller.unhighlightMoves();
  }

  mouseOverHandler(event, element) {
    const moves = this.generateMoves();

    controller.highlightMoves(moves);
  }

  generateMoves() {
    const moves = [];

    return moves;
  }

  move(coordinates) {
    this.coordinates = coordinates;

    this.applyCoordinates(this.coordinates);
  }

  didMount() {
    this.onDrag(this.dragHandler, this);

    this.onStopDrag(this.stopDragHandler, this);

    this.onMouseOut(this.mouseOutHandler, this);

    this.onMouseOver(this.mouseOverHandler, this);

    this.enableDragging();

    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    this.disableDragging();

    this.offMouseOver(this.mouseOverHandler, this);

    this.offMouseOut(this.mouseOutHandler, this);

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

function coordinatesFromTopAndLeft(top, left) {
  const y = yFromTop(top),
        x = xFromLeft(left),
        coordinates = Coordinates.fromXAndY(x, y);

  return coordinates;
}
