"use strict";

import PawnPieceDiv from "../../../div/piece/pawn";
import WhitePawnSVG from "../../../svg/pawn/white"

export default class WhitePawnPieceDiv extends PawnPieceDiv {
  static SVG = WhitePawnSVG;

  static defaultProperties = {
    className: "white"
  };
}
