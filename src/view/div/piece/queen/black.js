"use strict";

import PieceDiv from "../../../div/piece";
import BlackQueenSVG from "../../../svg/queen/black"

export default class BlackQueenDiv extends PieceDiv {
  static SVG = BlackQueenSVG;

  static defaultProperties = {
    className: "black-queen"
  };
}
