"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";

import coordinatesMixins from "../../mixins/coordinates";

import { squareDivWidth, squareDivHeight } from "../../styles";
import { midGrey, darkBrown, lightBrown, plainBlack } from "../../colours";

class SquareDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  getCoordinates() {
    return this.coordinates;
  }

  matchCoordinates(coordinates) {
    const matchesCoordinates = this.coordinates.match(coordinates);

    return matchesCoordinates;
  }

  dragOverHandler(dragElement, element) {
    this.highlight();
  }

  dragOutHandler(dragElement, element) {
    this.unhighlight();
  }

  dropHandler(dragElement, aborted, element, done) {
    const pieceDiv = dragElement, ///
          coordinatesEqualToMoveCoordinates = pieceDiv.areCoordinatesEqualToMoveCoordinates(this.coordinates);

    if (coordinatesEqualToMoveCoordinates) {
      pieceDiv.move(this.coordinates);
    }

    this.unhighlight();

    done();
  }

  highlight() {
    this.addClass("highlighted");
  }

  unhighlight() {
    this.removeClass("highlighted");
  }

  highlightMove() {
    this.addClass("highlighted-move");
  }

  unhighlightMove() {
    this.removeClass("highlighted-move");
  }

  didMount() {
    const { inverted } = this.properties,
          x = this.coordinates.getX(),
          y = this.coordinates.getY(),
          black = ((x + y) % 2) === 0;

    black ?
      this.addClass("black") :
        this.addClass("white");

    this.enableDrop();

    this.onDrop(this.dropHandler, this);

    this.onDragOut(this.dragOutHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    this.applyCoordinates(this.coordinates, inverted);
  }

  willUnmount() {
    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

    this.offDragOver(this.dragOverHandler, this);
  }

  parentContext() {
    const getSquareDivWidth = this.getWidth.bind(this),
          getSquareDivHeight = this.getHeight.bind(this);

    return ({
      getSquareDivWidth,
      getSquareDivHeight
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "square"
  };

  static fromClass(Class, properties) {
    const { coordinates } = properties,
          squareDiv = Element.fromClass(Class, properties, coordinates);

    return squareDiv;
  }
}

Object.assign(SquareDiv.prototype, dropMixins);
Object.assign(SquareDiv.prototype, coordinatesMixins);

export default withStyle(SquareDiv)`

  width: ${squareDivWidth};
  height: ${squareDivHeight};
  position: absolute;
  
  .black {
    background-color: ${darkBrown};
  }
  
  .white {
    background-color: ${lightBrown};
  }
  
  .highlighted {
    border: 3px solid ${plainBlack};
  }
  
  .highlighted-move::after {
    top: 33%;
    left: 33%;
    width: 33%;
    height: 33%;
    z-index: 1;
    content: " ";
    opacity: 75%;
    position: absolute;
    border-radius: 50%;
    background-color: ${midGrey};
  }
  
`;
