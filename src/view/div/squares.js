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

  highlightMoves(moves){
    moves.forEach((move) => {
      const coordinates = move.getCoordinates(),
            squareDiv = this.findSquareDiv(coordinates);

      if (squareDiv !== null) {
        squareDiv.highlightMove();
      }
    });
  }

  unhighlightMoves(){
    console.log("unhighlight")
  }

  highlightSquareDiv(coordinates) {
    const squareDiv = this.findSquareDiv(coordinates);

    if (squareDiv !== null) {
      const highlightedSquareDiv = squareDiv; ///

      highlightedSquareDiv.highlight();

      this.setHighlightedSquareDiv(highlightedSquareDiv);
    }
  }

  unhighlightSquareDiv() {
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
          highlightSquareDiv = this.highlightSquareDiv.bind(this),
          unhighlightSquareDiv = this.unhighlightSquareDiv.bind(this),
          parentContext = Object.assign({}, context, {
            highlightMoves,
            unhighlightMoves,
            highlightSquareDiv,
            unhighlightSquareDiv
          });

    return parentContext;
  }

  initialise() {
    const highlightedSquareDiv = null;

    this.setState({
      highlightedSquareDiv
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
  z-index: 0;
  position: absolute;
      
`;
