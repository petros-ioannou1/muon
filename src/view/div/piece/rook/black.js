"use strict";

import RookPieceDiv from "../../../div/piece/rook";
import BlackRookSVG from "../../../svg/rook/black"

import { BLACK } from "../../../../constants";

export default class BlackRookPieceDiv extends RookPieceDiv {
  static SVG = BlackRookSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
