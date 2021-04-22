"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackPawnSVG from "../../svg/pawn/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackPawnDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackPawnSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black pawn"
  };
}

Object.assign(BlackPawnDiv.prototype, coordinatesMixins);

export default withStyle(BlackPawnDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
