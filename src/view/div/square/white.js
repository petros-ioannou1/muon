"use strict";

import withStyle from "easy-with-style";  ///

import SquareDiv from "../../div/square";

import { plainWhite } from "../../../colours";

class WhiteSquareDiv extends SquareDiv {
  static defaultProperties = {
    className: "white"
  };
}

export default withStyle(WhiteSquareDiv)`

  background-color: ${plainWhite};
      
`;
