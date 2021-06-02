"use strict";

import QueenPieceDiv from "../../../div/piece/queen";
import BlackQueenSVG from "../../../svg/queen/black"

import { BLACK } from "../../../../constants";

export default class BlackQueenPieceDiv extends QueenPieceDiv {
  static SVG = BlackQueenSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
