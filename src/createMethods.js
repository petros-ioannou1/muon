"use strict";

export default function createMethods(scheduler, model, view) {
  function getSquareDivWidth() {
    const squareDivWidth = view.getSquareDivWidth();

    return squareDivWidth;
  }

  function getSquareDivHeight() {
    const squareDivHeight = view.getSquareDivHeight();

    return squareDivHeight;
  }

  function highlightSquareDiv(coordinates) {
    view.highlightSquareDiv(coordinates);
  }

  function unhighlightSquareDiv(coordinates) {
    view.unhighlightSquareDiv(coordinates);
  }

  return ({
    getSquareDivWidth,
    getSquareDivHeight,
    highlightSquareDiv,
    unhighlightSquareDiv
  });
}
