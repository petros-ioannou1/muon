"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../../coordinates";
import WhitePawnDiv from "../../div/pawn/white";
import WhiteRookDiv from "../../div/rook/white";
import WhiteKingDiv from "../../div/king/white";
import WhiteQueenDiv from "../../div/queen/white";
import WhiteBishopDiv from "../../div/bishop/white";
import WhiteKnightDiv from "../../div/knight/white";

class WhitePiecesDiv extends Element {
  childElements() {
    const WhitePieces = [
            WhiteRookDiv,
            WhiteKnightDiv,
            WhiteBishopDiv,
            WhiteKingDiv,
            WhiteQueenDiv,
            WhiteBishopDiv,
            WhiteKnightDiv,
            WhiteRookDiv,
            WhitePawnDiv
          ],
          whitePieces = WhitePieces.map((Piece, index) => {
            const x = index,  ///
                  y = 7,  ///
                  coordinates = Coordinates.fromXAndY(x, y),
                  piece =

                    <Piece coordinates={coordinates}/>

                  ;

            return piece;
          }),
          childElements = whitePieces;

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
