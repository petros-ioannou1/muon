"use strict";

import PieceDiv from "../../../div/piece";
import BlackPawnSVG from "../../../svg/pawn/black"

export default class BlackPawnDiv extends PieceDiv {
  static SVG = BlackPawnSVG;

  static defaultProperties = {
    className: "black-pawn"
  };
}
