"use strict";

import withStyle from "easy-with-style";  ///

import SquareDiv from "../../div/square";

import { plainBlack } from "../../../colours";

class BlackSquareDiv extends SquareDiv {
  static defaultProperties = {
    className: "black"
  };
}

export default withStyle(BlackSquareDiv)`

  background-color: ${plainBlack};
      
`;
