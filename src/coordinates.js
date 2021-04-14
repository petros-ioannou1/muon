"use strict";

import { BOARD_SIZE } from "./constants";
import { squareDivSize } from "./styles";

export default class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getTop() {
    const top = `${((BOARD_SIZE - 1) - this.y) * squareDivSize}rem`;

    return top;
  }

  getLeft() {
    const left = `${this.x * squareDivSize}rem`;

    return left;
  }

  static fromXAndY(x, y) {
    const coordinates = new Coordinates(x, y);

    return coordinates;
  }
}
