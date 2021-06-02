"use strict";

import RookPieceDiv from "../../../div/piece/rook";
import WhiteRookSVG from "../../../svg/rook/white"

import { WHITE } from "../../../../constants";

export default class WhiteRookPieceDiv extends RookPieceDiv {
  static SVG = WhiteRookSVG;

  static colour = WHITE;

  static defaultProperties = {
    className: "white"
  };
}
