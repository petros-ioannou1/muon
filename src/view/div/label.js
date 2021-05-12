"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import coordinatesMixins from "../../mixins/coordinates";

import { largeSize } from "../../sizes";
import { plainBlack } from "../../colours";
import { labelDivWidth, labelDivHeight } from "../../styles";

class LabelDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "label"
  };
}

Object.assign(LabelDiv.prototype, coordinatesMixins);

export default withStyle(LabelDiv)`

  color: ${plainBlack};
  width: ${labelDivWidth};
  height: ${labelDivHeight};
  display: flex;
  position: absolute;
  font-size: ${largeSize};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  
`;
