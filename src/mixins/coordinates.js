"use strict";

import { TOP, LEFT } from "../constants";

function applyCoordinates(coordinates) {
  const top = coordinates.getTop(),
        left = coordinates.getLeft();

  this.style(TOP, top);
  this.style(LEFT, left);
}

export default {
  applyCoordinates
};
