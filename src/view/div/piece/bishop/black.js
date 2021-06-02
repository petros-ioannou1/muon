"use strict";

import BishopPieceDiv from "../../../div/piece/bishop";
import BlackBishopSVG from "../../../svg/bishop/black"

import { BLACK } from "../../../../constants";

export default class BlackBishopPieceDiv extends BishopPieceDiv {
  static SVG = BlackBishopSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
