"use strict";

import { TOP, LEFT } from "../constants";
import { topFromYAndInverted, leftFromXAndInverted } from "../utilities/coordinates";

function applyCoordinates(coordinates, inverted) {
  const x = coordinates.getX(),
        y = coordinates.getY(),
        top = topFromYAndInverted(y, inverted),
        left = leftFromXAndInverted(x, inverted);

  this.style(TOP, top);
  this.style(LEFT, left);
}

export default {
  applyCoordinates
};
