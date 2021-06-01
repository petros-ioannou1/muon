"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BoardDiv from "./view/div/board";
import ExplorerDiv from "./view/div/explorer";

import { lightGrey } from "./colours";
import { boardDivWidth, boardDivHeight } from "./styles";

class View extends Element {
  childElements() {
    return ([

      <BoardDiv/>,
      <ExplorerDiv/>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  display: grid;
  min-height: 100vh;
  background-color: ${lightGrey};
      
  grid-template-rows: auto auto ${boardDivWidth} auto;
  grid-template-columns: auto ${boardDivHeight} auto;  
  grid-template-areas:
  
           ". . ."

       ". explorer-div ."
    
        ". board-div ."        
    
           ". . ."
    
  ;

`;
