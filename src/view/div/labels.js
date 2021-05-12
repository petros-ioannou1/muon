"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../coordinates";
import RankLabelDiv from "../div/label/rank";
import FileLabelDiv from "../div/label/file";

import { BOARD_SIZE, BOARD_INVERTED } from "../../constants";

class LabelsDiv extends Element {
  childElements() {
    const labelDivs = [];

    for (let y = 0; y < BOARD_SIZE; y++) {
      const x = BOARD_INVERTED ?
                  BOARD_SIZE :
                    -1,
            coordinates = Coordinates.fromXAndY(x, y),
            rankLabelDiv =

              <RankLabelDiv coordinates={coordinates}/>

            ;

      labelDivs.push(rankLabelDiv);
    }

    for (let x = 0; x < BOARD_SIZE; x++) {
      const y = BOARD_INVERTED ?
                  BOARD_SIZE :
                    -1,
            coordinates = Coordinates.fromXAndY(x, y),
            fileLabelDiv =

              <FileLabelDiv coordinates={coordinates}/>

            ;

      labelDivs.push(fileLabelDiv);
    }

    const childElements = labelDivs; ///

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "labels"
  };
}

export default withStyle(LabelsDiv)`

  top: 0;
  left: 0;
  position: absolute;
      
`;
