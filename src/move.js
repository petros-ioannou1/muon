"use strict";

export default class Move {
  constructor(pieceDiv, coordinates) {
    this.pieceDiv = pieceDiv;
    this.coordinates = coordinates;
  }

  getPieceDiv() {
    return this.pieceDiv;
  }

  getCoordinates() {
    return this.coordinates;
  }

  static fromPieceDivAndCoordinates(pieceDiv, coordinates) {
    const move = new Move(pieceDiv, coordinates);

    return move;
  }
}
