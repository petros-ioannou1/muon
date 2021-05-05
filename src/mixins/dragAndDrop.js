"use strict";

import { controller } from "sufficient";
import { window, constants } from "easy";

import { START_DRAGGING_DELAY } from "../constants";

const { LEFT_MOUSE_BUTTON } = constants;

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}

function isMouseOver(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        boundsOverlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft),
        mouseOver = boundsOverlappingMouse; ///

  return mouseOver;
}

function startDragging(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        boundsTop = bounds.getTop(),
        boundsLeft = bounds.getLeft(),
        topOffset = mouseTop - boundsTop,
        leftOffset = mouseLeft - boundsLeft,
        startMouseTop = mouseTop, ///
        startMouseLeft = mouseLeft; ///

  this.addClass("dragging");

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.drag(mouseTop, mouseLeft);
}

function stopDragging() {
  this.removeClass("dragging");
}

function dragging(mouseTop, mouseLeft) {
  this.drag(mouseTop, mouseLeft);
}

function startWaitingToDrag(mouseTop, mouseLeft) {
  let timeout = this.getTimeout();

  if (timeout === null) {
    timeout = setTimeout(() => {
      this.resetTimeout();

      const mouseOver = this.isMouseOver(mouseTop, mouseLeft);

      if (mouseOver) {
        this.startDragging(mouseTop, mouseLeft);
      }
    }, START_DRAGGING_DELAY);

    this.updateTimeout(timeout);
  }
}

function stopWaitingToDrag() {
  const timeout = this.getTimeout();

  if (timeout !== null) {
    clearTimeout(timeout);

    this.resetTimeout();
  }
}

function mouseDownHandler(event, element) {
  const { button, pageX, pageY } = event,
        mouseTop = pageY, ///
        mouseLeft = pageX;  ///

  window.on("blur", this.mouseUpHandler, this); ///

  window.onMouseUp(this.mouseUpHandler, this);

  window.onMouseMove(this.mouseMoveHandler, this);

  if (button === LEFT_MOUSE_BUTTON) {
    const dragging = this.isDragging();

    if (!dragging) {
      this.startWaitingToDrag(mouseTop, mouseLeft);
    }
  }
}

function mouseUpHandler(event, element) {
  window.off("blur", this.mouseUpHandler, this);  ///

  window.offMouseUp(this.mouseUpHandler, this);

  window.offMouseMove(this.mouseMoveHandler, this);

  const dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  } else {
    this.stopWaitingToDrag();
  }
}

function mouseMoveHandler(event, element) {
  const { pageX, pageY } = event,
        mouseTop = pageY, ///
        mouseLeft = pageX;  ///

  const dragging = this.isDragging();

  if (dragging) {
    this.dragging(mouseTop, mouseLeft);
  }
}

function drag(mouseTop, mouseLeft) {
  const topOffset = this.getTopOffset(),
        leftOffset = this.getLeftOffset(),
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        squareDivWidth = controller.getSquareDivWidth(),
        squareDivHeight = controller.getSquareDivHeight(),
        windowScrollTop = window.getScrollTop(),
        windowScrollLeft = window.getScrollLeft();

  let top = mouseTop - topOffset - windowScrollTop,
      left = mouseLeft - leftOffset - windowScrollLeft;

  top = `${top}px`; ///
  left = `${left}px`; ///

  console.log(Math.floor((mouseLeft - startMouseLeft + windowScrollLeft) / squareDivWidth),
              Math.floor((mouseTop - startMouseTop + windowScrollTop) / squareDivHeight),)

  const css = {
    top,
    left
  };

  this.css(css);
}

function resetTimeout() {
  const timeout = null;

  this.updateTimeout(timeout);
}

function getTimeout() {
  const state = this.getState(),
        { timeout } = state;

  return timeout;
}

function getTopOffset() {
  const state = this.getState(),
        { topOffset } = state;

  return topOffset;
}

function getLeftOffset() {
  const state = this.getState(),
        { leftOffset } = state;

  return leftOffset;
}

function getStartMouseTop() {
  const state = this.getState(),
        { startMouseTop } = state;

  return startMouseTop;
}

function getStartMouseLeft() {
  const state = this.getState(),
        { startMouseLeft } = state;

  return startMouseLeft;
}

function updateTimeout(timeout) {
  this.updateState({
    timeout
  });
}

function setTopOffset(topOffset) {
  this.updateState({
    topOffset
  });
}

function setLeftOffset(leftOffset) {
  this.updateState({
    leftOffset
  });
}

function setStartMouseTop(startMouseTop) {
  this.updateState({
    startMouseTop
  });
}

function setStartMouseLeft(startMouseLeft) {
  this.updateState({
    startMouseLeft
  });
}

function setInitialState() {
  const timeout = null,
        topOffset = null,
        leftOffset = null,
        startMouseTop = null,
        startMouseLeft = null;

  this.setState({
    timeout,
    topOffset,
    leftOffset,
    startMouseTop,
    startMouseLeft
  });
}

export default {
  isDragging,
  isMouseOver,
  startDragging,
  stopDragging,
  dragging,
  startWaitingToDrag,
  stopWaitingToDrag,
  mouseDownHandler,
  mouseUpHandler,
  mouseMoveHandler,
  drag,
  resetTimeout,
  getTimeout,
  getTopOffset,
  getLeftOffset,
  getStartMouseTop,
  getStartMouseLeft,
  updateTimeout,
  setTopOffset,
  setLeftOffset,
  setStartMouseTop,
  setStartMouseLeft,
  setInitialState
};
