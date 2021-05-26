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
    let foundSquareDiv = null;

    const squareDivs = this.getSquareDivs();

    squareDivs.some((squareDiv) => {
      const squareDivMatchesCoordinates = squareDiv.matchCoordinates(coordinates),
            found = squareDivMatchesCoordinates; ///

      if (found) {
        foundSquareDiv = squareDiv; ///

        return true;
      }
    });

    const squareDiv = foundSquareDiv; ///

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

  highlightCoordinates(coordinates) {
    const squareDiv = this.findSquareDiv(coordinates),
          highlightedSquareDiv = squareDiv; ///

    highlightedSquareDiv.highlight();

    this.setHighlightedSquareDiv(highlightedSquareDiv);
  }

  unhighlightCoordinates() {
    let highlightedSquareDiv = this.getHighlightedSquareDiv();

    if (highlightedSquareDiv !== null) {
      highlightedSquareDiv.unhighlight();

      highlightedSquareDiv = null;

      this.setHighlightedSquareDiv(highlightedSquareDiv);
    }
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
          highlightCoordinates = this.highlightCoordinates.bind(this),
          unhighlightCoordinates = this.unhighlightCoordinates.bind(this),
          parentContext = Object.assign({}, context, {
            highlightMoves,
            unhighlightMoves,
            highlightCoordinates,
            unhighlightCoordinates
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
  
  static fromClass(Class, properties) {
    const squareDiv = Element.fromClass(Class, properties);

    squareDiv.initialise();

    return squareDiv;
  }
}

export default withStyle(SquaresDiv)`

  top: 0;
  left: 0;
  position: absolute;
      
`;
