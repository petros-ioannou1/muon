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
          unhighlightSquareDiv = this.unhighlightSquareDiv.bind(this),
          parentContext = Object.assign({}, context, {
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
