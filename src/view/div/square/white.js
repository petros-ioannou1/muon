"use strict";

import withStyle from "easy-with-style";  ///

import SquareDiv from "../../div/square";

import { lightBrown } from "../../../colours";

class WhiteSquareDiv extends SquareDiv {
  static defaultProperties = {
    className: "white"
  };
}

export default withStyle(WhiteSquareDiv)`

  background-color: ${lightBrown};
      
`;
