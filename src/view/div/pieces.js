"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import PieceDiv from "../div/piece";
import Coordinates from "../../coordinates";

class PiecesDiv extends Element {
  childElements() {
    const x = 0,
          y = 0,
          coordinates = Coordinates.fromXAndY(x, y);

    return ([

      <PieceDiv coordinates={coordinates}/>,

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pieces"
  };
}

export default withStyle(PiecesDiv)`
  
  z-index: 1;
  position: absolute;
      
`;
