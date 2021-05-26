"use strict";

import RookPieceDiv from "../../../div/piece/rook";
import WhiteRookSVG from "../../../svg/rook/white"

export default class WhiteRookPieceDiv extends RookPieceDiv {
  static SVG = WhiteRookSVG;

  static defaultProperties = {
    className: "white"
  };
}
