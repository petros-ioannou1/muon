"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import positionMixins from "../../mixins/position";

import { plainRed } from "../../colours";
import { squareDivWidth, squareDivHeight } from "../../styles";

class SquareDiv extends Element {
  didMount() {
    const { coordinates } = this.properties,
          top = coordinates.getTop(),
          left = coordinates.getLeft();

    this.setTop(top);
    this.setLeft(left);
  }

  willUnmount() {
    ///
  }

  static tagName = "div";

  static defaultProperties = {
    className: "square"
  };
}

Object.assign(SquareDiv.prototype, positionMixins);

export default withStyle(SquareDiv)`

  width: ${squareDivWidth};
  height: ${squareDivHeight};
  position: absolute;
  
  :hover {
    border: 2px solid ${plainRed};
  }
      
`;

