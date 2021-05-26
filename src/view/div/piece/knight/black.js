"use strict";

import KnightPieceDiv from "../../../div/piece/knight";
import BlackKnightSVG from "../../../svg/knight/black"

export default class BlackKnightPieceDiv extends KnightPieceDiv {
  static SVG = BlackKnightSVG;

  static defaultProperties = {
    className: "black"
  };
}
