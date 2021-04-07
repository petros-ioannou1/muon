"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { plainRed } from "../../colours";
import { TOP, LEFT, BOARD_SIZE } from "../../constants";
import { squareDivSize, squareDivWidth, squareDivHeight } from "../../styles";

class SquareDiv extends Element {
  didMount() {
    const { position } = this.properties,
          [ x, y ] = position,
          top = `${((BOARD_SIZE - 1) - y) * squareDivSize}rem`,
          left = `${x * squareDivSize}rem`;

    this.style(TOP, top);
    this.style(LEFT, left);
  }

  willUnmount() {
    ///
  }

  static tagName = "div";

  static defaultProperties = {
    className: "square"
  };
}

export default withStyle(SquareDiv)`

  width: ${squareDivWidth};
  height: ${squareDivHeight};
  position: absolute;
  
  :hover {
    border: 2px solid ${plainRed};
  }
      
`;
