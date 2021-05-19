"use strict";

class Move {
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

  make() {
    this.pieceDiv.move(this.coordinates);
  }
}
