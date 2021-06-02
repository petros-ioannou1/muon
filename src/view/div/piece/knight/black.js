"use strict";

import KnightPieceDiv from "../../../div/piece/knight";
import BlackKnightSVG from "../../../svg/knight/black"

import { BLACK } from "../../../../constants";

export default class BlackKnightPieceDiv extends KnightPieceDiv {
  static SVG = BlackKnightSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
