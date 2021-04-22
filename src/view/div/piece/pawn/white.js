"use strict";

import PieceDiv from "../../../div/piece";
import WhitePawnSVG from "../../../svg/pawn/white"

export default class WhitePawnDiv extends PieceDiv {
  static SVG = WhitePawnSVG;

  static defaultProperties = {
    className: "w-pawn"
  };
}
