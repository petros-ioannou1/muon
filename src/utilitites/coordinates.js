"use strict";

import { controller } from "sufficient";

import { squareDivSize } from "../styles";
import { BOARD_SIZE, HALF } from "../constants";

export function xFromLeft(left, inverted = true) {
  const squareDivWidth = controller.getSquareDivWidth(),
        x = inverted ?
              Math.floor((-left / squareDivWidth) + HALF) :
                Math.floor((left / squareDivWidth) + HALF);

  return x;
}

export function yFromTop(top, inverted = true) {
  const squareDivHeight = controller.getSquareDivHeight(),
        y = inverted ?
              Math.floor((top / squareDivHeight) + HALF) :
                Math.floor((-top / squareDivHeight) + HALF);

  return y;
}

export function leftFromX(x, inverted = true) {
  const left = inverted ?
                 `${((BOARD_SIZE - 1) - x) * squareDivSize}rem` :
                   `${x * squareDivSize}rem`;

  return left;
}

export function topFromY(y, inverted = true) {
  const top = inverted ?
                `${y * squareDivSize}rem` :
                  `${((BOARD_SIZE - 1) - y) * squareDivSize}rem`;

  return top;
}
