"use strict";

import Move from "../../../move";
import PieceDiv from "../../div/piece";
import Coordinates from "../../../coordinates";

export default class KnightDiv extends PieceDiv {
  generateMoves() {
    const x = 1,
          y = 2,
          relativeCoordinates = Coordinates.fromXAndY(x, y),
          coordinates = this.coordinates.add(relativeCoordinates),
          pieceDiv = this,  ///
          move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates),
          moves = [
            move
          ];

    return moves;
  }

  static defaultProperties = {
    className: "knight"
  };
}
