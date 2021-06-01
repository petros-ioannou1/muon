"use strict";

const dropElement = null;

Object.assign(globalThis, {
  dropElement
});

import { DROP } from "../constants";

function onDrop(dropHandler, element) {
  const eventType = DROP,
        handler = dropHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDrop(dropHandler, element) {
  const eventType = DROP,
        handler = dropHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function enableDrop() {
  this.onMouseOut(mouseOutHandler, this);
  this.onMouseOver(mouseOverHandler, this);
}

function disableDrop() {
  this.offMouseOut(mouseOutHandler, this);
  this.offMouseOver(mouseOverHandler, this);
}

export default {
  onDrop,
  offDrop,
  enableDrop,
  disableDrop
}

function mouseOutHandler(event, element) {
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    let { dropElement } = globalThis;

    if (dropElement !== null) {
      if (dropElement === this) {
        dropElement = null;

        Object.assign(globalThis, {
          dropElement
        });

        console.log("drop element is null")
      }
    }
  }
}

function mouseOverHandler(event, element) {
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    const dropElement = this;

    Object.assign(globalThis, {
      dropElement
    });

    console.log("drop element is not null")
  }
}
