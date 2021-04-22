"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import SquareDiv from "../div/square";
import Coordinates from "../../coordinates";

class SquaresDiv extends Element {
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

  static tagName = "div";

  static defaultProperties = {
    className: "squares"
  };
}

export default withStyle(SquaresDiv)`

  z-index: 0;
  position: absolute;
      
`;
