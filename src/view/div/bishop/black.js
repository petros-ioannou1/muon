"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackBishopSVG from "../../svg/bishop/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackBishopDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackBishopSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black bishop"
  };
}

Object.assign(BlackBishopDiv.prototype, coordinatesMixins);

export default withStyle(BlackBishopDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
