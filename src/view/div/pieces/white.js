"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../../coordinates";
import WhitePawnPieceDiv from "../../div/piece/pawn/white";
import WhiteRookPieceDiv from "../../div/piece/rook/white";
import WhiteKingPieceDiv from "../../div/piece/king/white";
import WhiteQueenPieceDiv from "../../div/piece/queen/white";
import WhiteBishopPieceDiv from "../../div/piece/bishop/white";
import WhiteKnightPieceDiv from "../../div/piece/knight/white";

class WhitePiecesDiv extends Element {
  childElements() {
    const WhitePieceDivs = [
            WhiteRookPieceDiv,
            WhiteKnightPieceDiv,
            WhiteBishopPieceDiv,
            WhiteKingPieceDiv,
            WhiteQueenPieceDiv,
            WhiteBishopPieceDiv,
            WhiteKnightPieceDiv,
            WhiteRookPieceDiv,
            WhitePawnPieceDiv
          ],
          whitePieceDivs = WhitePieceDivs.map((PieceDiv, index) => {
            const x = index,  ///
                  y = 7,  ///
                  coordinates = Coordinates.fromXAndY(x, y);

            return (

              <PieceDiv coordinates={coordinates}/>

            );
          }),
          childElements = whitePieceDivs;

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "white-pieces"
  };
}

export default withStyle(WhitePiecesDiv)`
  
  z-index: 1;
  position: absolute;
      
`;
