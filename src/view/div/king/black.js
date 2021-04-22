"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackKingSVG from "../../svg/king/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackKingDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackKingSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black king"
  };
}

Object.assign(BlackKingDiv.prototype, coordinatesMixins);

export default withStyle(BlackKingDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
