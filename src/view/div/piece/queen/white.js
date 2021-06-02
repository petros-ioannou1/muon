"use strict";

import QueenPieceDiv from "../../../div/piece/queen";
import WhiteQueenSVG from "../../../svg/queen/white";

import { WHITE } from "../../../../constants";

export default class WhiteQueenPieceDiv extends QueenPieceDiv {
  static SVG = WhiteQueenSVG;

  static colour = WHITE;

  static defaultProperties = {
    className: "white"
  };
}
