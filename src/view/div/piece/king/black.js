"use strict";

import KingPieceDiv from "../../../div/piece/king";
import BlackKingSVG from "../../../svg/king/black"

import { BLACK } from "../../../../constants";

export default class BlackKingPieceDiv extends KingPieceDiv {
  static SVG = BlackKingSVG;

  static colour = BLACK;

  static defaultProperties = {
    className: "black"
  };
}
