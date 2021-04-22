"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../../coordinates";
import BlackPawnPieceDiv from "../../div/piece/pawn/black";
import BlackRookPieceDiv from "../../div/piece/rook/black";
import BlackKingPieceDiv from "../../div/piece/king/black";
import BlackQueenPieceDiv from "../../div/piece/queen/black";
import BlackBishopPieceDiv from "../../div/piece/bishop/black";
import BlackKnightPieceDiv from "../../div/piece/knight/black";

class BlackPiecesDiv extends Element {
  childElements() {
    const BlackPieceDivs = [
            BlackRookPieceDiv,
            BlackKnightPieceDiv,
            BlackBishopPieceDiv,
            BlackKingPieceDiv,
            BlackQueenPieceDiv,
            BlackBishopPieceDiv,
            BlackKnightPieceDiv,
            BlackRookPieceDiv,
            BlackPawnPieceDiv
          ],
          blackPieceDivs = BlackPieceDivs.map((PieceDiv, index) => {
            const x = index,  ///
                  y = 0,  ///
                  coordinates = Coordinates.fromXAndY(x, y);

            return (

              <PieceDiv coordinates={coordinates}/>

            );
          }),
          childElements = blackPieceDivs;

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "black-pieces"
  };
}

export default withStyle(BlackPiecesDiv)`
  
  z-index: 1;
  position: absolute;
      
`;
