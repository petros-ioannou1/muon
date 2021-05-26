"use strict";

import BishopPieceDiv from "../../../div/piece/bishop";
import WhiteBishopSVG from "../../../svg/bishop/white"

export default class WhiteBishopPieceDiv extends BishopPieceDiv {
  static SVG = WhiteBishopSVG;

  static defaultProperties = {
    className: "white"
  };
}
