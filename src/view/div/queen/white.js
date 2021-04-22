"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import WhiteQueenSVG from "../../svg/queen/white";
import coordinatesMixins from "../../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../../styles";

class WhiteQueenDiv extends Element {
  didMount() {
    const { coordinates } = this.properties;

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <WhiteQueenSVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white queen"
  };
}

Object.assign(WhiteQueenDiv.prototype, coordinatesMixins);

export default withStyle(WhiteQueenDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
`;
