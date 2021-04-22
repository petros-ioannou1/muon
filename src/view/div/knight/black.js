"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackKnightSVG from "../../svg/knight/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackKnightDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackKnightSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black knight"
  };
}

Object.assign(BlackKnightDiv.prototype, coordinatesMixins);

export default withStyle(BlackKnightDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
