"use strict";

import PieceDiv from "../../../div/piece";
import WhiteBishopSVG from "../../../svg/bishop/white"

export default class WhiteBishopDiv extends PieceDiv {
  static SVG = WhiteBishopSVG;

  static defaultProperties = {
    className: "white-bishop"
  };
}
