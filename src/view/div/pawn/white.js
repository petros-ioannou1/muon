"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhitePawnSVG from "../../svg/pawn/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhitePawnDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhitePawnSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white pawn"
  };
}

Object.assign(WhitePawnDiv.prototype, coordinatesMixins);

export default withStyle(WhitePawnDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
