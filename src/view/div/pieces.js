"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../coordinates";

import { UP, BOARD_SIZE } from "../../constants";

class PiecesDiv extends Element {
  getPieceDivs() {
    const childElements = this.getChildElements(),
          pieceDivs = childElements;  ///

    return pieceDivs;
  }

  findPieceDiv(callback) {
    const pieceDivs = this.getPieceDivs(),
          pieceDiv = pieceDivs.find(callback) || null; ///

    return pieceDiv;
  }

  forEachPieceDiv(callback) {
    const pieceDivs = this.getPieceDivs();

    pieceDivs.forEach(callback);
  }

  childElements() {
    const pawnPieceDivs = [],
          majorPieceDivs = [],
          { inverted } = this.properties,
          { MajorPieceDivs, PawnPieceDiv, orientation } = this.constructor;

    MajorPieceDivs.forEach((MajorPieceDiv, index) => {
      const offset = 0,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation);

      majorPieceDivs.push(

        <MajorPieceDiv coordinates={coordinates} inverted={inverted} />

      );
    });

    for (let index = 0; index < BOARD_SIZE; index++) {
      const offset = 1,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation);

      pawnPieceDivs.push(

        <PawnPieceDiv coordinates={coordinates} inverted={inverted} />

      );
    }

    return ([
      ...pawnPieceDivs,
      ...majorPieceDivs
    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pieces"
  };
}

export default withStyle(PiecesDiv)`
  
  top: 0;
  left: 0;
  position: absolute;
      
`;

function coordinatesFromIndexOffsetAndDirection(index, offset, orientation) {
  const x = index,  ///
        y = (orientation === UP) ?
              offset :
                (BOARD_SIZE - offset - 1),
        coordinates = Coordinates.fromXAndY(x, y);

  return coordinates;
}
