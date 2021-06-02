"use strict";

import BishopPieceDiv from "../../../div/piece/bishop";
import WhiteBishopSVG from "../../../svg/bishop/white"

import { WHITE } from "../../../../constants";

export default class WhiteBishopPieceDiv extends BishopPieceDiv {
  static SVG = WhiteBishopSVG;

  static colour = WHITE;

  static defaultProperties = {
    className: "white"
  };
}
