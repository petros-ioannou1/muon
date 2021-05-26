"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import Move from "../../move";
import Coordinates from "../../coordinates";
import draggableMixins from "../../mixins/draggable";
import coordinatesMixins from "../../mixins/coordinates";

import { coordinatesFromTopAndLeft } from "../../utilitites/coordinates";
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

  draggingHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeMouseCoordinates),
          coordinatesValid = coordinates.areValid();

    controller.unhighlightCoordinates();

    if (coordinatesValid) {
      controller.highlightCoordinates(coordinates);
    }
  }

  stopDraggingHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeMouseCoordinates),
          coordinatesValid = coordinates.areValid();

    coordinatesValid ?
      this.move(coordinates) :
        this.move(this.coordinates);

    controller.unhighlightCoordinates();
  }

  mouseOutHandler(event, element) {
    controller.unhighlightMoves();
  }

  mouseOverHandler(event, element) {
    const moves = this.generateMoves();

    controller.highlightMoves(moves);
  }

  generateMoves() {
    const moves = [],
          { directions, maximumMagnitude } = this.constructor;

    for (let magnitude = 1; magnitude <= maximumMagnitude; magnitude++) {
      directions.forEach((direction) => {
        const relativeCoordinates = Coordinates.fromMagnitudeAndDirection(magnitude, direction),
              coordinates = this.coordinates.add(relativeCoordinates),
              coordinatesValid = coordinates.areValid();

        if (coordinatesValid) {
          const pieceDiv = this,  ///
                move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

          moves.push(move);
        }
      });
    }

    return moves;
  }

  move(coordinates) {
    this.coordinates = coordinates;

    this.applyCoordinates(this.coordinates);
  }

  didMount() {
    this.onMouseOut(this.mouseOutHandler, this);

    this.onMouseOver(this.mouseOverHandler, this);

    this.onDragging(this.draggingHandler, this);

    this.onStopDragging(this.stopDraggingHandler, this);

    this.enableDragging();

    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    this.disableDragging();

    this.offDragging(this.draggingHandler, this);

    this.offStopDragging(this.stopDraggingHandler, this);

    this.offMouseOver(this.mouseOverHandler, this);

    this.offMouseOut(this.mouseOutHandler, this);

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

