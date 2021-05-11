"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import SquareDiv from "../div/square";
import Coordinates from "../../coordinates";

class SquaresDiv extends Element {
  getSquareDivs() {
    const squareDivChildElements = this.getChildElements("div.square"),
          squareDivs = squareDivChildElements;  ///

    return squareDivs;
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

  highlightSquareDiv(coordinates) {
    const squareDiv = this.findSquareDiv(coordinates);

    let previousHighlightedSquareDiv = this.getPreviousHighlightedSquareDiv();

    if (previousHighlightedSquareDiv !== null) {
      previousHighlightedSquareDiv.unhighlight();
    }

    if (squareDiv !== null) {
      squareDiv.highlight();

      previousHighlightedSquareDiv = squareDiv; ///

      this.setPreviousHighlightedSquareDiv(previousHighlightedSquareDiv);
    }
  }

  childElements() {
    const squareDivs = [];

    for (let y = 0; y <= 7; y++) {
      for (let x = 0; x <= 7; x++) {
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
          highlightSquareDiv = this.highlightSquareDiv.bind(this),
          parentContext = Object.assign({}, context, {
            highlightSquareDiv
          });

    return parentContext;
  }

  getPreviousHighlightedSquareDiv() {
    const state = this.getState(),
          { previousHighlightedSquareDiv } = state;

    return previousHighlightedSquareDiv;
  }

  setPreviousHighlightedSquareDiv(previousHighlightedSquareDiv) {
    this.updateState({
      previousHighlightedSquareDiv
    });
  }

  initialise() {
    const previousHighlightedSquareDiv = null;

    this.setState({
      previousHighlightedSquareDiv
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
