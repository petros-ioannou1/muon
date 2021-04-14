"use strict";

import { TOP, LEFT } from "../constants";

function setTop(top) {
  this.style(TOP, top);
}

function setLeft(left) {
  this.style(LEFT, left);
}

export default {
  setTop,
  setLeft
};
