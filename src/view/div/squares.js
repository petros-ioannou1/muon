"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../coordinates";
import BlackSquareDiv from "../div/square/black";
import WhiteSquareDiv from "../div/square/white";

class SquaresDiv extends Element {
  childElements() {
    const squareDivs = [];

    for (let y = 0; y <= 7; y++) {
      for (let x = 0; x <= 7; x++) {
        const black = ((x + y) % 2) === 1,
              coordinates = Coordinates.fromXAndY(x, y),
              SquareDiv = black ?
                            BlackSquareDiv :
                              WhiteSquareDiv,
              squareDiv =

                <SquareDiv coordinates={coordinates}/>

        ;

        squareDivs.push(squareDiv);
      }
    }

    const childElements = squareDivs; ///

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "squares"
  };
}

export default withStyle(SquaresDiv)`

  z-index: 0;
  position: absolute;
      
`;
