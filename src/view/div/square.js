"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import coordinatesMixins from "../../mixins/coordinates";

import { darkBrown, lightBrown } from "../../colours";
import { squareDivWidth, squareDivHeight } from "../../styles";

class SquareDiv extends Element {
  didMount() {
    const { coordinates } = this.properties,
          x = coordinates.getX(),
          y = coordinates.getY(),
          black = ((x + y) % 2) === 0;

    black ?
      this.addClass("black") :
        this.addClass("white");

    this.applyCoordinates(coordinates);
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
  
`;

