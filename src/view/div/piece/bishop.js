"use strict";

import PieceDiv from "../../div/piece";

export default class BishopDiv extends PieceDiv {
  static directions = [
    { x: +1, y: +1 },
    { x: +1, y: -1 },
    { x: -1, y: +1 },
    { x: -1, y: -1 },
  ];

  static maximumMagnitude = 7;

  static defaultProperties = {
    className: "bishop"
  };
}
