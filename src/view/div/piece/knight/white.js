"use strict";

import KnightPieceDiv from "../../../div/piece/knight";
import WhiteKnightSVG from "../../../svg/knight/white"

export default class WhiteKnightPieceDiv extends KnightPieceDiv {
  static SVG = WhiteKnightSVG;

  static defaultProperties = {
    className: "white"
  };
}
