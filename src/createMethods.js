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

  function enablePieceDivsPointerEvents() {
    view.enablePieceDivsPointerEvents();
  }

  function disablePieceDivsPointerEvents() {
    view.disablePieceDivsPointerEvents();
  }

  return ({
    highlightMoves,
    unhighlightMoves,
    getSquareDivWidth,
    getSquareDivHeight,
    enablePieceDivsPointerEvents,
    disablePieceDivsPointerEvents
  });
}
