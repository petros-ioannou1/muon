"use strict";

import PieceDiv from "../../../div/piece";
import BlackKingSVG from "../../../svg/king/black"

export default class BlackKingDiv extends PieceDiv {
  static SVG = BlackKingSVG;

  static defaultProperties = {
    className: "black-king"
  };
}
