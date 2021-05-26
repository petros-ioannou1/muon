"use strict";

import KingPieceDiv from "../../../div/piece/king";
import WhiteKingSVG from "../../../svg/king/white"

export default class WhiteKingPieceDiv extends KingPieceDiv {
  static SVG = WhiteKingSVG;

  static defaultProperties = {
    className: "white-king"
  };
}
