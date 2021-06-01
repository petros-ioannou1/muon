"use strict";

import PiecesDiv from "../../div/pieces";
import BlackPawnPieceDiv from "../../div/piece/pawn/black";
import BlackRookPieceDiv from "../../div/piece/rook/black";
import BlackKingPieceDiv from "../../div/piece/king/black";
import BlackQueenPieceDiv from "../../div/piece/queen/black";
import BlackBishopPieceDiv from "../../div/piece/bishop/black";
import BlackKnightPieceDiv from "../../div/piece/knight/black"

import { DOWN } from "../../../constants";

export default class BlackPiecesDiv extends PiecesDiv {
  parentContext() {
    const enableBlackPieceDivsPointerEvents = this.enablePieceDivsPointerEvents.bind(this),
          disableBlackPieceDivsPointerEvents = this.disablePieceDivsPointerEvents.bind(this);

    return ({
      enableBlackPieceDivsPointerEvents,
      disableBlackPieceDivsPointerEvents
    });
  }

  static PawnPieceDiv = BlackPawnPieceDiv;

  static MajorPieceDivs = [
          BlackRookPieceDiv,
          BlackKnightPieceDiv,
          BlackBishopPieceDiv,
          BlackKingPieceDiv,
          BlackQueenPieceDiv,
          BlackBishopPieceDiv,
          BlackKnightPieceDiv,
          BlackRookPieceDiv
        ];

  static orientation = DOWN;

  static defaultProperties = {
    className: "black"
  };
}
