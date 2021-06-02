"use strict";

import KingPieceDiv from "../../../div/piece/king";
import WhiteKingSVG from "../../../svg/king/white"

import { WHITE } from "../../../../constants";

export default class WhiteKingPieceDiv extends KingPieceDiv {
  static SVG = WhiteKingSVG;

  static colour = WHITE;

  static defaultProperties = {
    className: "white"
  };
}