"use strict";

import PawnPieceDiv from "../../../div/piece/pawn";
import WhitePawnSVG from "../../../svg/pawn/white"

import { WHITE } from "../../../../constants";

export default class WhitePawnPieceDiv extends PawnPieceDiv {
  static SVG = WhitePawnSVG;

  static colour = WHITE;

  static direction = { x: 0, y: +1 };

  static defaultProperties = {
    className: "white"
  };
}