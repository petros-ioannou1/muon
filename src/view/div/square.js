"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import coordinatesMixins from "../../mixins/coordinates";

import { squareDivWidth, squareDivHeight } from "../../styles";
import { darkBrown, lightBrown, brightRed, lightGrey } from "../../colours";

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
    const x = this.coordinates.getX(),
          y = this.coordinates.getY(),
          black = ((x + y) % 2) === 0;

    black ?
      this.addClass("black") :
        this.addClass("white");

    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    ///
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
    border: 4px solid ${brightRed};
  }
  
  .highlighted-move::after {
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    content: " ";
    opacity: 75%;
    position: absolute;
    border-radius: 50%;
    background-color: ${lightGrey};
  }
  
`;
