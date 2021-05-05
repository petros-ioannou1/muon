"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../coordinates";

import { UP, BOARD_SIZE } from "../../constants";

class PiecesDiv extends Element {
  childElements() {
    const { MajorPieceDivs, PawnPieceDiv, direction } = this.constructor,
          pawnPieceDivs = [],
          majorPieceDivs = [];

    MajorPieceDivs.forEach((MajorPieceDiv, index) => {
      const offset = 0,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, direction),
            majorPieceDiv =

              <MajorPieceDiv coordinates={coordinates} />

            ;

      majorPieceDivs.push(majorPieceDiv);
    });

    for (let index = 0; index < BOARD_SIZE; index++) {
      const offset = 1,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, direction),
            pawnPieceDiv =

              <PawnPieceDiv coordinates={coordinates} />

            ;

      pawnPieceDivs.push(pawnPieceDiv);
    }

    const childElements = [
      ...pawnPieceDivs,
      ...majorPieceDivs
    ];

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pieces"
  };
}

export default withStyle(PiecesDiv)`
  
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
      
`;

function coordinatesFromIndexOffsetAndDirection(index, offset, direction) {
  const x = index,  ///
        y = (direction === UP) ?
              offset :
                (BOARD_SIZE - offset - 1),
        coordinates = Coordinates.fromXAndY(x, y);

  return coordinates;
}
