"use strict";

import PieceDiv from "../../../div/piece";
import BlackRookSVG from "../../../svg/rook/black"

export default class BlackRookDiv extends PieceDiv {
  static SVG = BlackRookSVG;

  static defaultProperties = {
    className: "black-rook"
  };
}
