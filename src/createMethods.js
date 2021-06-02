"use strict";

export default function createMethods(scheduler, model, view) {
  function highlightMoves(moves) {
    view.highlightMoves(moves);
  }

  function unhighlightMoves() {
    view.unhighlightMoves();
  }

  function isSquareOccupied(coordinates) {
    const squareOccupied = view.isSquareOccupied(coordinates);

    return squareOccupied;
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
    isSquareOccupied,
    getSquareDivWidth,
    getSquareDivHeight,
    enablePieceDivsPointerEvents,
    disablePieceDivsPointerEvents
  });
}
