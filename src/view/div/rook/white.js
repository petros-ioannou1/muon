"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhiteRookSVG from "../../svg/rook/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhiteRookDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhiteRookSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white rook"
  };
}

Object.assign(WhiteRookDiv.prototype, coordinatesMixins);

export default withStyle(WhiteRookDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
