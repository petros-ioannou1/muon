"use strict";

import BishopPieceDiv from "../../../div/piece/bishop";
import BlackBishopSVG from "../../../svg/bishop/black"

export default class BlackBishopPieceDiv extends BishopPieceDiv {
  static SVG = BlackBishopSVG;

  static defaultProperties = {
    className: "black"
  };
}
