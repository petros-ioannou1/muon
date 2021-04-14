"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { plainRed } from "../../colours";
import { TOP, LEFT } from "../../constants";
import { squareDivWidth, squareDivHeight } from "../../styles";

class SquareDiv extends Element {
  didMount() {
    const { coordinates } = this.properties,
          top = coordinates.getTop(),
          left = coordinates.getLeft();

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

