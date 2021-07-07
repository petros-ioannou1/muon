"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import SquareDiv from "../div/square";
import Coordinates from "../../coordinates";

import { BOARD_SIZE } from "../../constants";

class SquaresDiv extends Element {
  getSquareDivs() {
    const squareDivChildElements = this.getChildElements("div.square"),
          squareDivs = squareDivChildElements;  ///

    return squareDivs;
  }

  getHighlightedSquareDiv() {
    const state = this.getState(),
        { highlightedSquareDiv } = state;

    return highlightedSquareDiv;
  }

  setHighlightedSquareDiv(highlightedSquareDiv) {
    this.updateState({
      highlightedSquareDiv
    });
  }

  getMoveHighlightedSquareDivs() {
    const state = this.getState(),
          { highlightedMoveSquareDivs } = state;

    return highlightedMoveSquareDivs;
  }

  setMoveHighlightedSquareDivs(highlightedMoveSquareDivs) {
    this.updateState({
      highlightedMoveSquareDivs
    });
  }

  findSquareDiv(coordinates) {
    const squareDivs = this.getSquareDivs(),
          squareDiv = squareDivs.find((squareDiv) => {
            const squareDivMatchesCoordinates = squareDiv.matchCoordinates(coordinates);

            if (squareDivMatchesCoordinates) {
              return true;
            }
          }) || null; ///

    return squareDiv;
  }

  highlightMoves(moves) {
    const moveHighlightedSquareDivs = [];

    moves.forEach((move) => {
      const coordinates = move.getCoordinates(),
            squareDiv = this.findSquareDiv(coordinates),
            moveHighlightedSquareDiv = squareDiv; ///

      moveHighlightedSquareDiv.highlightMove();

      moveHighlightedSquareDivs.push(moveHighlightedSquareDiv);
    });

    this.setMoveHighlightedSquareDivs(moveHighlightedSquareDivs);
  }

  unhighlightMoves() {
    let moveHighlightedSquareDivs = this.getMoveHighlightedSquareDivs();

    moveHighlightedSquareDivs.forEach((moveHighlightedSquareDiv) => {
      moveHighlightedSquareDiv.unhighlightMove();
    });

    moveHighlightedSquareDivs = [];

    this.setMoveHighlightedSquareDivs(moveHighlightedSquareDivs);
  }

  childElements() {
    const squareDivs = [];

    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        const coordinates = Coordinates.fromXAndY(x, y),
              squareDiv =

                <SquareDiv coordinates={coordinates}/>

              ;

        squareDivs.push(squareDiv);
      }
    }

    const childElements = squareDivs; ///

    return childElements;
  }

  parentContext() {
    const context = this.getContext(),
          highlightMoves = this.highlightMoves.bind(this),
          unhighlightMoves = this.unhighlightMoves.bind(this),
          parentContext = Object.assign({}, context, {
            highlightMoves,
            unhighlightMoves
          });

    return parentContext;
  }

  initialise() {
    const highlightedSquareDiv = null,
          highlightedMoveSquareDivs = [];

    this.setState({
      highlightedSquareDiv,
      highlightedMoveSquareDivs
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "squares"
  };
}

export default withStyle(SquaresDiv)`

  top: 0;
  left: 0;
  position: absolute;
      
`;
