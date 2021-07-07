"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";
import { dragMixins } from "@djalbat/easy-drag-and-drop";

import Move from "../../move";
import Coordinates from "../../coordinates";
import coordinatesMixins from "../../mixins/coordinates";
import PieceBackgroundDiv from "../div/pieceBackground";

import { BLACK, WHITE } from "../../constants";
import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  getCollapsedBounds() {
    const bounds = this.getBounds(),
          collapsedBounds = bounds;

    return collapsedBounds;
  }

  getCoordinates() {
    return this.coordinates;
  }

  getColour() {
    const { colour } = this.constructor;

    return colour;
  }

  setCoordinates(coordinates) {
    this.coordinates = coordinates;
  }

  stopDragHandler(element) {
    this.applyCoordinates(this.coordinates);

    controller.enableHighlightedMoves();

    controller.unhighlightMoves();
  }

  startDragHandler(element) {
    controller.disableHighlightedMoves();
  }

  mouseOutHandler(event, element) {
    const dragging = this.isDragging();

    if (!dragging) {
      controller.unhighlightMoves();
    }
  }

  mouseOverHandler(event, element) {
    const moves = this.generateMoves();

    controller.highlightMoves(moves);
  }

  enablePointerEvents() {
    this.removeClass("no-pointer-events");
  }

  disablePointerEvents() {
    this.addClass("no-pointer-events");
  }

  findPieceDiv(coordinates, opposing) {
    let findPieceDiv;

    const { colour } = this.constructor;

    switch (colour) {
      case BLACK :
        findPieceDiv = opposing ?
                         controller.findWhitePieceDiv :
                           controller.findBlackPieceDiv;
        break;
      case WHITE :
        findPieceDiv = opposing ?
                         controller.findBlackPieceDiv :
                           controller.findWhitePieceDiv;
        break;
    }

    const pieceDiv = findPieceDiv((pieceDiv) => {
      const pieceDivCoordinates = pieceDiv.getCoordinates(),
            pieceDivCoordinatesEqualToCoordinates = pieceDivCoordinates.areEqualTo(coordinates);

      if (pieceDivCoordinatesEqualToCoordinates) {
        return true;
      }
    });

    return pieceDiv;
  }

  isPiecePresent(coordinates, opposing = false) {
    const pieceDiv = this.findPieceDiv(coordinates, opposing),
          pieceDivPresent = (pieceDiv !== null);

    return pieceDivPresent;
  }

  generateMoves() {
    const moves = [],
          { directions, maximumMagnitude } = this.constructor;

    directions.forEach((direction) => {
      for (let magnitude = 1; magnitude <= maximumMagnitude; magnitude++) {
        const relativeCoordinates = Coordinates.fromMagnitudeAndDirection(magnitude, direction),
              coordinates = this.coordinates.add(relativeCoordinates),
              coordinatesValid = coordinates.areValid();

        if (coordinatesValid) {
          const pieceDivPresent = this.isPiecePresent(coordinates);

          if (pieceDivPresent) {
            break;
          }

          const pieceDiv = this,  ///
                move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

          moves.push(move);

          const opposing = true,
                opposingPieceDivPresent = this.isPiecePresent(coordinates, opposing);

          if (opposingPieceDivPresent) {
            break;
          }
        }
      }
    });

    return moves;
  }

  move(coordinates) {
    this.coordinates = coordinates;

    this.applyCoordinates(this.coordinates);
  }

  setMoves(moves) {
    this.updateState({
      moves
    });
  }

  getMoves() {
    const state = this.getState(),
          { moves } = state;

    return moves;
  }

  didMount() {
    this.enableDrag();

    this.onStopDrag(this.stopDragHandler, this);

    this.onStartDrag(this.startDragHandler, this);

    this.onMouseOut(this.mouseOutHandler, this);

    this.onMouseOver(this.mouseOverHandler, this);

    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    this.disableDrag();

    this.offStopDrag(this.stopDragHandler, this);

    this.offStartDrag(this.startDragHandler, this);

    this.offMouseOver(this.mouseOverHandler, this);

    this.offMouseOut(this.mouseOutHandler, this);
  }

  childElements() {
    const { SVG } = this.constructor;

    return ([

      <SVG/>,
      <PieceBackgroundDiv/>

    ]);
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

Object.assign(PieceDiv.prototype, dragMixins);
Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  user-select: none;
  
  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
