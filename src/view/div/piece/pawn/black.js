"use strict";

import PawnPieceDiv from "../../../div/piece/pawn";
import BlackPawnSVG from "../../../svg/pawn/black"

export default class BlackPawnPieceDiv extends PawnPieceDiv {
  static SVG = BlackPawnSVG;

  static defaultProperties = {
    className: "black"
  };
}
