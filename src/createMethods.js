"use strict";

export default function createMethods(scheduler, model, view) {
  function highlightMoves(moves) {
    view.highlightMoves(moves);
  }

  function unhighlightMoves() {
    view.unhighlightMoves();
  }

  function getSquareDivWidth() {
    const squareDivWidth = view.getSquareDivWidth();

    return squareDivWidth;
  }

  function getSquareDivHeight() {
    const squareDivHeight = view.getSquareDivHeight();

    return squareDivHeight;
  }

  function highlightCoordinates(coordinates) {
    view.highlightCoordinates(coordinates);
  }

  function unhighlightCoordinates(coordinates) {
    view.unhighlightCoordinates(coordinates);
  }

  return ({
    highlightMoves,
    unhighlightMoves,
    getSquareDivWidth,
    getSquareDivHeight,
    highlightCoordinates,
    unhighlightCoordinates
  });
}
