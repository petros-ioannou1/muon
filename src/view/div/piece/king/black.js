"use strict";

import KingPieceDiv from "../../../div/piece/king";
import BlackKingSVG from "../../../svg/king/black"

export default class BlackKingPieceDiv extends KingPieceDiv {
  static SVG = BlackKingSVG;

  static defaultProperties = {
    className: "black"
  };
}
