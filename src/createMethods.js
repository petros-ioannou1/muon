"use strict";

let highlightedMoves = true;

export default function createMethods(scheduler, model, view) {
  function highlightMoves(moves) {
    if (highlightedMoves) {
      view.highlightMoves(moves);
    }
  }

  function unhighlightMoves() {
    if (highlightedMoves) {
      view.unhighlightMoves();
    }
  }

  function getSquareDivWidth() {
    const squareDivWidth = view.getSquareDivWidth();

    return squareDivWidth;
  }

  function getSquareDivHeight() {
    const squareDivHeight = view.getSquareDivHeight();

    return squareDivHeight;
  }

  function findWhitePieceDiv(callback) {
    const piecePresent = view.findWhitePieceDiv(callback);

    return piecePresent;
  }

  function findBlackPieceDiv(callback) {
    const piecePresent = view.findBlackPieceDiv(callback);

    return piecePresent;
  }

  function enableHighlightedMoves() {
    highlightedMoves = true;
  }

  function disableHighlightedMoves() {
    highlightedMoves = false;
  }

  return ({
    highlightMoves,
    unhighlightMoves,
    getSquareDivWidth,
    getSquareDivHeight,
    findWhitePieceDiv,
    findBlackPieceDiv,
    enableHighlightedMoves,
    disableHighlightedMoves
  });
}
