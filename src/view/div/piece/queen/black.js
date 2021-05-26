"use strict";

import QueenPieceDiv from "../../../div/piece/queen";
import BlackQueenSVG from "../../../svg/queen/black"

export default class BlackQueenPieceDiv extends QueenPieceDiv {
  static SVG = BlackQueenSVG;

  static defaultProperties = {
    className: "black"
  };
}
