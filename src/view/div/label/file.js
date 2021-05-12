"use strict";

import LabelDiv from "../../div/label";

export default class FileLabelDiv extends LabelDiv {
  didMount() {
    const { coordinates } = this.properties,
          x = coordinates.getX(),
          file = fileFromX(x),
          html = file;

    this.html(html);

    this.applyCoordinates(coordinates);
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "file"
  };
}

function fileFromX(x) {
  const index = x,  ///
        files = [ "A", "B", "C", "D", "E", "F", "G", "H" ],
        file = files[index];

  return file;
}
