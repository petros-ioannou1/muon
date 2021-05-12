"use strict";

import { controller } from "sufficient";

import { squareDivSize } from "../styles";
import { HALF, BOARD_SIZE, BOARD_INVERTED } from "../constants";

export function xFromLeft(left) {
  const squareDivWidth = controller.getSquareDivWidth(),
        x = BOARD_INVERTED ?
              Math.floor((-left / squareDivWidth) + HALF) :
                Math.floor((left / squareDivWidth) + HALF);

  return x;
}

export function yFromTop(top) {
  const squareDivHeight = controller.getSquareDivHeight(),
        y = BOARD_INVERTED ?
              Math.floor((top / squareDivHeight) + HALF) :
                Math.floor((-top / squareDivHeight) + HALF);

  return y;
}

export function leftFromX(x) {
  const left = BOARD_INVERTED ?
                 `${((BOARD_SIZE - 1) - x) * squareDivSize}rem` :
                   `${x * squareDivSize}rem`;

  return left;
}

export function topFromY(y) {
  const top = BOARD_INVERTED ?
                `${y * squareDivSize}rem` :
                  `${((BOARD_SIZE - 1) - y) * squareDivSize}rem`;

  return top;
}
