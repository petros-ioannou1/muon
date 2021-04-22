"use strict";

import PieceDiv from "../../../div/piece";
import WhiteKingSVG from "../../../svg/king/white"

export default class WhiteKingDiv extends PieceDiv {
  static SVG = WhiteKingSVG;

  static defaultProperties = {
    className: "white-king"
  };
}
