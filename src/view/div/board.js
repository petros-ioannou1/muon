"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BlackSquareDiv from "../div/square/black.js";
import WhiteSquareDiv from "../div/square/white.js";

class BoardDiv extends Element {
  childElements() {
    const squareDivs = [];

    for (let y = 0; y <= 7; y++) {
      for (let x = 0; x <= 7; x++) {
        const black = ((x + y) % 2) === 1,
              position = [ x, y ],
              SquareDiv = black ?
                            BlackSquareDiv :
                              WhiteSquareDiv,
              squareDiv =

                <SquareDiv position={position}/>

              ;

        squareDivs.push(squareDiv);
      }
    }

    const childElements = squareDivs; ///

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "board"
  };
}

export default withStyle(BoardDiv)`

  position: relative;
  grid-area: board-div;
      
`;
