"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhiteBishopSVG from "../../svg/bishop/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhiteBishopDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhiteBishopSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white bishop"
  };
}

Object.assign(WhiteBishopDiv.prototype, coordinatesMixins);

export default withStyle(WhiteBishopDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
