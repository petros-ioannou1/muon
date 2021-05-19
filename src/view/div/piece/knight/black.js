"use strict";

import KnightDiv from "../../../div/piece/knight";
import BlackKnightSVG from "../../../svg/knight/black"

export default class BlackKnightDiv extends KnightDiv {
  static SVG = BlackKnightSVG;

  static defaultProperties = {
    className: "black"
  };
}
