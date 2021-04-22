"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackQueenSVG from "../../svg/queen/black";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class BlackQueenDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <BlackQueenSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black queen"
  };
}

Object.assign(BlackQueenDiv.prototype, coordinatesMixins);

export default withStyle(BlackQueenDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
