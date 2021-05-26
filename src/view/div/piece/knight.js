"use strict";

import Move from "../../../move";
import PieceDiv from "../../div/piece";
import Coordinates from "../../../coordinates";

export default class KnightDiv extends PieceDiv {
  generateMoves() {
    const moves = [],
          { directions, maximumMagnitude } = this.constructor;

    for (let magnitude = 1; magnitude <= maximumMagnitude; magnitude++) {
      directions.forEach((direction) => {
        const relativeCoordinates = Coordinates.fromMagnitudeAndDirection(magnitude, direction),
              coordinates = this.coordinates.add(relativeCoordinates),
              coordinatesValid = coordinates.areValid();

        if (coordinatesValid) {
          const pieceDiv = this,  ///
              move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

          moves.push(move);
        }
      });
    }

    return moves;
  }

  static directions = [
    { x: +1, y: +2 },
    { x: +1, y: -2 },
    { x: -1, y: +2 },
    { x: -1, y: -2 },
    { x: +2, y: +1 },
    { x: +2, y: -1 },
    { x: -2, y: +1 },
    { x: -2, y: -1 }
  ];

  static maximumMagnitude = 1;

  static defaultProperties = {
    className: "knight"
  };
}
