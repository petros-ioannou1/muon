"use strict";

import PieceDiv from "../../../div/piece";
import WhiteQueenSVG from "../../../svg/queen/white"

export default class WhiteQueenDiv extends PieceDiv {
  static SVG = WhiteQueenSVG;

  static defaultProperties = {
    className: "white-queen"
  };
}
