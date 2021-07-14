"use strict";

import { BOARD_SIZE } from "../constants";
import { squareDivSize } from "../styles";

export function topFromYAndInverted(y, inverted) {
  const top = inverted ?
                `${y * squareDivSize}rem` :
                  `${((BOARD_SIZE - 1) - y) * squareDivSize}rem`;

  return top;
}
export function leftFromXAndInverted(x, inverted) {
  const left = inverted ?
                 `${((BOARD_SIZE - 1) - x) * squareDivSize}rem` :
                   `${x * squareDivSize}rem`;

  return left;
}
