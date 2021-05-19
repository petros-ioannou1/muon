"use strict";

import Move from "../../../move";
import PieceDiv from "../../div/piece";
import Coordinates from "../../../coordinates";

export default class KnightDiv extends PieceDiv {
  generateMoves() {
    const moves = [];

    relativeCoordinatesArray.forEach((relativeCoordinates) => {
      const coordinates = this.coordinates.add(relativeCoordinates),
            coordinatesValid = coordinates.areValid();

      if (coordinatesValid) {
        const pieceDiv = this,  ///
              move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

        moves.push(move);
      }
    });

    return moves;
  }

  static defaultProperties = {
    className: "knight"
  };
}

const relativeCoordinatesArray = [
  { x: +1, y: +2 },
  { x: +1, y: -2 },
  { x: -1, y: +2 },
  { x: -1, y: -2 },
  { x: +2, y: +1 },
  { x: +2, y: -1 },
  { x: -2, y: +1 },
  { x: -2, y: -1 }
].map((json) => {
  const { x, y } = json,
        relativeCoordinates = Coordinates.fromXAndY(x, y);

  return relativeCoordinates;
});
