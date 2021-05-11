"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import draggableMixins from "../../mixins/draggable";
import coordinatesMixins from "../../mixins/coordinates";

import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  dragHandler(relativeMouseTop, relativeMouseLeft) {
    const squareDivWidth = controller.getSquareDivWidth(),
          squareDivHeight = controller.getSquareDivHeight();

    console.log("drag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight))
  }

  stopDragHandler(relativeMouseTop, relativeMouseLeft) {
    const squareDivWidth = controller.getSquareDivWidth(),
          squareDivHeight = controller.getSquareDivHeight();

    console.log("stopdrag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight))
  }

  startDragHandler(relativeMouseTop, relativeMouseLeft) {
    const squareDivWidth = controller.getSquareDivWidth(),
          squareDivHeight = controller.getSquareDivHeight();

    console.log("startdrag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight))
  }

  didMount() {
    this.applyCoordinates(this.coordinates);

    this.onDrag(this.dragHandler, this);
    this.onStopDrag(this.stopDragHandler, this);
    this.onStartDrag(this.startDragHandler, this);

    this.enableDragging();
  }

  willUnmount() {
    this.disableDragging();

    this.offDrag(this.dragHandler, this);
    this.offStopDrag(this.stopDragHandler, this);
    this.offStartDrag(this.startDragHandler, this);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "piece"
  };

  static fromClass(Class, properties) {
    const { coordinates } = properties,
          pieceDiv = Element.fromClass(Class, properties, coordinates);

    pieceDiv.initialise();

    return pieceDiv;
  }
}

Object.assign(PieceDiv.prototype, draggableMixins);
Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
  .dragging {
    position: fixed;
    z-index: 10000;
  }

`;
