"use strict";

import PieceDiv from "../../div/piece";

export default class KingDiv extends PieceDiv {
  static directions = [
    { x: +1, y: +1 },
    { x: +1, y: -1 },
    { x: -1, y: +1 },
    { x: -1, y: -1 },
    { x: +1, y: +0 },
    { x: +0, y: -1 },
    { x: -1, y: +0 },
    { x: +0, y: +1 }
  ];

  static maximumMagnitude = 1;

  static defaultProperties = {
    className: "king"
  };
}
