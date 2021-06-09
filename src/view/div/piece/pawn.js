"use strict";

import Move from "../../../move";
import PieceDiv from "../../div/piece";
import Coordinates from "../../../coordinates";

export default class PawnDiv extends PieceDiv {
  generateMoves() {
    const moves = [],
          magnitude = 1,
          { direction } = this.constructor;

    const relativeCoordinates = Coordinates.fromMagnitudeAndDirection(magnitude, direction),
          coordinates = this.coordinates.add(relativeCoordinates),
          coordinatesValid = coordinates.areValid();

    if (coordinatesValid) {
      const pieceDivPresent = this.isPiecePresent(coordinates);

      if (!pieceDivPresent) {
        const pieceDiv = this,  ///
              move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

        moves.push(move);
      }
    }

    return moves;
  }

  static defaultProperties = {
    className: "pawn"
  };
}
