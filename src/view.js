"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BoardSection from "./view/section/board";

import { lightGrey } from "./colours";
import { boardSectionWidth, boardSectionHeight } from "./styles";

class View extends Element {
  childElements() {
    return ([

      <BoardSection/>

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
      
  grid-template-rows: auto ${boardSectionWidth} auto;
  grid-template-columns: auto ${boardSectionHeight} auto;  
  grid-template-areas:
  
           ". . ."
    
     ". board-section ."        
    
           ". . ."
    
  ;

`;
