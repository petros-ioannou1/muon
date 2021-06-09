"use strict";

import PiecesDiv from "../../div/pieces";
import WhitePawnPieceDiv from "../../div/piece/pawn/white";
import WhiteRookPieceDiv from "../../div/piece/rook/white";
import WhiteKingPieceDiv from "../../div/piece/king/white";
import WhiteQueenPieceDiv from "../../div/piece/queen/white";
import WhiteBishopPieceDiv from "../../div/piece/bishop/white";
import WhiteKnightPieceDiv from "../../div/piece/knight/white";

import { UP } from "../../../constants";

export default class WhitePiecesDiv extends PiecesDiv {
  parentContext() {
    const findWhitePieceDiv = this.findPieceDiv.bind(this),
          enableWhitePieceDivsPointerEvents = this.enablePieceDivsPointerEvents.bind(this),
          disableWhitePieceDivsPointerEvents = this.disablePieceDivsPointerEvents.bind(this);

    return ({
      findWhitePieceDiv,
      enableWhitePieceDivsPointerEvents,
      disableWhitePieceDivsPointerEvents
    });
  }

  static PawnPieceDiv = WhitePawnPieceDiv;

  static MajorPieceDivs = [
    WhiteRookPieceDiv,
    WhiteKnightPieceDiv,
    WhiteBishopPieceDiv,
    WhiteKingPieceDiv,
    WhiteQueenPieceDiv,
    WhiteBishopPieceDiv,
    WhiteKnightPieceDiv,
    WhiteRookPieceDiv
  ];

  static orientation = UP;

  static defaultProperties = {
    className: "white"
  };
}
