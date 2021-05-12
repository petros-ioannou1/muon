"use strict";

import { TOP, LEFT } from "../constants";
import { topFromY, leftFromX } from "../utilitites/coordinates";

function applyCoordinates(coordinates) {
  const x = coordinates.getX(),
        y = coordinates.getY(),
        top = topFromY(y),
        left = leftFromX(x);

  this.style(TOP, top);
  this.style(LEFT, left);
}

export default {
  applyCoordinates
};
