"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhiteKingSVG from "../../svg/king/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhiteKingDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhiteKingSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white king"
  };
}

Object.assign(WhiteKingDiv.prototype, coordinatesMixins);

export default withStyle(WhiteKingDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
