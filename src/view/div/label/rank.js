"use strict";

import LabelDiv from "../../div/label";

export default class RankLabelDiv extends LabelDiv {
  didMount() {
    const { coordinates } = this.properties,
          y = coordinates.getY(),
          rank = rankFromY(y),
          html = rank;

    this.html(html);

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "rank"
  };
}

function rankFromY(y) {
  const index = y,  ///
        ranks = [ 1, 2, 3, 4, 5, 6, 7, 8 ],
        rank = ranks[index];

  return rank;
}
