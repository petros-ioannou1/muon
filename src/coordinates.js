"use strict";

import { BOARD_SIZE } from "./constants";

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

  areValid() {
    const validX = (this.x >= 0) && (this.x < BOARD_SIZE),
          validY = (this.y >= 0) && (this.y < BOARD_SIZE),
          valid = validX && validY;

    return valid;
  }

  areEqualTo(coordinates) {
    const x = coordinates.getX(),
          y = coordinates.getY(),
          equalTo = (this.x === x) && (this.y === y);

    return equalTo;
  }

  add(coordinates) {
    let x = coordinates.getX(),
        y = coordinates.getY();

    x += this.x;
    y += this.y;

    coordinates = Coordinates.fromXAndY(x, y);  ///

    return coordinates;
  }

  match(coordinates) {
    const x = coordinates.getX(),
          y = coordinates.getY(),
          matches = (this.x === x) && (this.y === y);

    return matches;
  }

  static fromXAndY(x, y) {
    const coordinates = new Coordinates(x, y);

    return coordinates;
  }

  static fromDirection(direction) {
    const { x, y } = direction,
          coordinates = new Coordinates(x, y);

    return coordinates;
  }

  static fromMagnitudeAndDirection(magnitude, direction) {
    let { x, y } = direction;

    x *= magnitude;
    y *= magnitude;

    const coordinates = new Coordinates(x, y);

    return coordinates;
  }
}
