"use strict";

import QueenPieceDiv from "../../../div/piece/queen";
import WhiteQueenSVG from "../../../svg/queen/white"

export default class WhiteQueenPieceDiv extends QueenPieceDiv {
  static SVG = WhiteQueenSVG;

  static defaultProperties = {
    className: "white"
  };
}
