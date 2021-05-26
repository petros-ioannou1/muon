"use strict";

import PieceDiv from "../../div/piece";

export default class KnightDiv extends PieceDiv {
  static directions = [
    { x: +1, y: +2 },
    { x: +1, y: -2 },
    { x: -1, y: +2 },
    { x: -1, y: -2 },
    { x: +2, y: +1 },
    { x: +2, y: -1 },
    { x: -2, y: +1 },
    { x: -2, y: -1 }
  ];

  static maximumMagnitude = 1;

  static defaultProperties = {
    className: "knight"
  };
}
