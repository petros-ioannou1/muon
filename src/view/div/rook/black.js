"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackRookSVG from "../../svg/rook/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackRookDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackRookSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black rook"
  };
}

Object.assign(BlackRookDiv.prototype, coordinatesMixins);

export default withStyle(BlackRookDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
