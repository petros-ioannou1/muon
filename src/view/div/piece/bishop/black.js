"use strict";

import PieceDiv from "../../../div/piece";
import BlackBishopSVG from "../../../svg/bishop/black"

export default class BlackBishopDiv extends PieceDiv {
  static SVG = BlackBishopSVG;

  static defaultProperties = {
    className: "black-bishop"
  };
}
