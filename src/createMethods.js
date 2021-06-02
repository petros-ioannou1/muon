"use strict";

export default function createMethods(scheduler, model, view) {
  function isPiecePresent(coordinates) {
    const piecePresent = view.isPiecePresent(coordinates);

    return piecePresent;
  }

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
    isPiecePresent,
    highlightMoves,
    unhighlightMoves,
    getSquareDivWidth,
    getSquareDivHeight,
    enablePieceDivsPointerEvents,
    disablePieceDivsPointerEvents
  });
}
