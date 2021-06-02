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

  somePieceDiv(callback) {
    const pieceDivs = this.getPieceDivs(),
          result = pieceDivs.some(callback);

    return result;
  }

  forEachPieceDiv(callback) {
    const pieceDivs = this.getPieceDivs();

    pieceDivs.forEach(callback);
  }

  isPiecePresent(coordinates) {
    const piecePresent = this.somePieceDiv((pieceDiv) => {
      const pieceDivCoordinates = pieceDiv.getCoordinates(),
            pieceDivCoordinatesEqualToCoordinates = pieceDivCoordinates.areEqualTo(coordinates);

      if (pieceDivCoordinatesEqualToCoordinates) {
        return true;
      }
    });

    return piecePresent;
  }

  enablePieceDivsPointerEvents() {
    this.forEachPieceDiv((pieceDiv) => pieceDiv.enablePointerEvents());
  }

  disablePieceDivsPointerEvents() {
    this.forEachPieceDiv((pieceDiv) => pieceDiv.disablePointerEvents());
  }

  childElements() {
    const { MajorPieceDivs, PawnPieceDiv, orientation } = this.constructor,
          pawnPieceDivs = [],
          majorPieceDivs = [];

    MajorPieceDivs.forEach((MajorPieceDiv, index) => {
      const offset = 0,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation),
            majorPieceDiv =

              <MajorPieceDiv coordinates={coordinates} />

            ;

      majorPieceDivs.push(majorPieceDiv);
    });

    for (let index = 0; index < BOARD_SIZE; index++) {
      const offset = 1,
            coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation),
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
