"use strict";

import RookPieceDiv from "../../../div/piece/rook";
import BlackRookSVG from "../../../svg/rook/black"

export default class BlackRookPieceDiv extends RookPieceDiv {
  static SVG = BlackRookSVG;

  static defaultProperties = {
    className: "black"
  };
}
