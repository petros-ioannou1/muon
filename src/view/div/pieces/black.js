"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../../coordinates";
import BlackPawnDiv from "../../div/pawn/black";
import BlackRookDiv from "../../div/rook/black";
import BlackKingDiv from "../../div/king/black";
import BlackQueenDiv from "../../div/queen/black";
import BlackBishopDiv from "../../div/bishop/black";
import BlackKnightDiv from "../../div/knight/black";

class BlackPiecesDiv extends Element {
  childElements() {
    const BlackPieces = [
            BlackRookDiv,
            BlackKnightDiv,
            BlackBishopDiv,
            BlackKingDiv,
            BlackQueenDiv,
            BlackBishopDiv,
            BlackKnightDiv,
            BlackRookDiv,
            BlackPawnDiv
          ],
          blackPieces = BlackPieces.map((Piece, index) => {
            const x = index,  ///
                  y = 0,  ///
                  coordinates = Coordinates.fromXAndY(x, y),
                  piece =

                    <Piece coordinates={coordinates}/>

                  ;

            return piece;
          }),
          childElements = blackPieces;

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
