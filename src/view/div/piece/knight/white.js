"use strict";

import KnightDiv from "../../../div/piece/knight";
import WhiteKnightSVG from "../../../svg/knight/white"

export default class WhiteKnightDiv extends KnightDiv {
  static SVG = WhiteKnightSVG;

  static defaultProperties = {
    className: "white"
  };
}
