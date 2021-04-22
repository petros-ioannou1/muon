"use strict";

import PieceDiv from "../../../div/piece";
import WhiteRookSVG from "../../../svg/rook/white"

export default class WhiteRookDiv extends PieceDiv {
  static SVG = WhiteRookSVG;

  static defaultProperties = {
    className: "white-rook"
  };
}
