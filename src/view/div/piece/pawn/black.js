"use strict";

import PawnPieceDiv from "../../../div/piece/pawn";
import BlackPawnSVG from "../../../svg/pawn/black"

import { BLACK } from "../../../../constants";

export default class BlackPawnPieceDiv extends PawnPieceDiv {
  static SVG = BlackPawnSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
