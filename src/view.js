"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class View extends Element {
  childElements() {
    const { childElements } = this.properties;

    return ([

      <div/>,

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const view = Element.fromClass(Class, properties);

    view.initialise();

    return view;
  }
}

export default withStyle(View)`

  display: grid;
  min-height: 100vh;
      
`;
