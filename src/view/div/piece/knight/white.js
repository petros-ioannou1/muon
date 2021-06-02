"use strict";

import KnightPieceDiv from "../../../div/piece/knight";
import WhiteKnightSVG from "../../../svg/knight/white"

import { WHITE } from "../../../../constants";

export default class WhiteKnightPieceDiv extends KnightPieceDiv {
  static SVG = WhiteKnightSVG;

  static colour = WHITE;

  static defaultProperties = {
    className: "white"
  };
}