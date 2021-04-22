"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhiteKnightSVG from "../../svg/knight/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhiteKnightDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhiteKnightSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white knight"
  };
}

Object.assign(WhiteKnightDiv.prototype, coordinatesMixins);

export default withStyle(WhiteKnightDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
