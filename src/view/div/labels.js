"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Coordinates from "../../coordinates";
import RankLabelDiv from "../div/label/rank";
import FileLabelDiv from "../div/label/file";

import { BOARD_SIZE } from "../../constants";

class LabelsDiv extends Element {
  childElements() {
    const labelDivs = [],
          { inverted } = this.properties;

    for (let y = 0; y < BOARD_SIZE; y++) {
      const x = inverted ?
                  BOARD_SIZE :
                    -1,
            coordinates = Coordinates.fromXAndY(x, y);

      labelDivs.push(

        <RankLabelDiv coordinates={coordinates} inverted={inverted} />

      );
    }

    for (let x = 0; x < BOARD_SIZE; x++) {
      const y = inverted ?
                  BOARD_SIZE :
                    -1,
            coordinates = Coordinates.fromXAndY(x, y);

      labelDivs.push(

        <FileLabelDiv coordinates={coordinates} inverted={inverted} />

      );
    }

    return ([ ...labelDivs ]);
  }

  static tagName = "div";

  static ignoredProperties = [
    "inverted"
  ];

  static defaultProperties = {
    className: "labels"
  };
}

export default withStyle(LabelsDiv)`

  top: 0;
  left: 0;
  position: absolute;
      
`;
