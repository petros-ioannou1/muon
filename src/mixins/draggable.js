"use strict";

import { window, constants } from "easy";

import { DRAG, STOP_DRAG, START_DRAG, START_DRAG_DELAY } from "../constants";

const { LEFT_MOUSE_BUTTON } = constants;

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}

function startWaitingToDrag(mouseTop, mouseLeft) {
  let timeout = this.getTimeout();

  if (timeout === null) {
    timeout = setTimeout(() => {
      this.resetTimeout();

      const draggableMouseOver = this.isMouseOver(mouseTop, mouseLeft);

      if (draggableMouseOver) {
        this.startDrag(mouseTop, mouseLeft);
      }
    }, START_DRAG_DELAY);

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

function startDrag(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        eventType = START_DRAG,
        boundsTop = bounds.getTop(),
        boundsLeft = bounds.getLeft(),
        topOffset = mouseTop - boundsTop,
        leftOffset = mouseLeft - boundsLeft,
        startMouseTop = mouseTop, ///
        startMouseLeft = mouseLeft, ///
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  this.addClass("dragging");

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);

  this.drag(mouseTop, mouseLeft);
}

function dragging(mouseTop, mouseLeft) {
  this.drag(mouseTop, mouseLeft);
}

function stopDrag(mouseTop, mouseLeft) {
  const eventType = STOP_DRAG,
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);

  this.removeClass("dragging");
}

function drag(mouseTop, mouseLeft) {
  const eventType = DRAG,
        topOffset = this.getTopOffset(),
        leftOffset = this.getLeftOffset(),
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  let top = startMouseTop + relativeMouseTop - topOffset,
      left = startMouseLeft + relativeMouseLeft - leftOffset ;

  top = `${top}px`; ///
  left = `${left}px`; ///

  const css = {
    top,
    left
  };

  this.css(css);

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);
}

function onDrag(dragHandler, element) {
  const eventType = DRAG,
        handler = dragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDrag(dragHandler, element) {
  const eventType = DRAG,
        handler = dragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onStopDrag(stopDragHandler, element) {
  const eventType = STOP_DRAG,
        handler = stopDragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offStopDrag(stopDragHandler, element) {
  const eventType = STOP_DRAG,
        handler = stopDragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onStartDrag(startDragHandler, element) {
  const eventType = START_DRAG,
        handler = startDragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offStartDrag(startDragHandler, element) {
  const eventType = START_DRAG,
        handler = startDragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function callHandlers(eventType, relativeMouseTop, relativeMouseLeft) {
  const eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener;

    handler.call(element, relativeMouseTop, relativeMouseLeft);
  });
}

function enableDragging() {
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

  this.onMouseDown(mouseDownHandler, this);
}

function disableDragging() {
  this.offMouseDown(mouseDownHandler, this);
}

function isMouseOver(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        boundsOverlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft),
        draggableMouseOver = boundsOverlappingMouse; ///

  return draggableMouseOver;
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

export default {
  isDragging,
  startWaitingToDrag,
  stopWaitingToDrag,
  startDrag,
  dragging,
  stopDrag,
  drag,
  onDrag,
  offDrag,
  onStopDrag,
  offStopDrag,
  onStartDrag,
  offStartDrag,
  callHandlers,
  enableDragging,
  disableDragging,
  isMouseOver,
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
  setStartMouseLeft
};

function mouseTopFromEvent(event) {
  const { pageY } = event,
        scrollTop = window.getScrollTop(),
        mouseTop = pageY + scrollTop;

  return mouseTop;
}

function mouseLeftFromEvent(event) {
  const { pageX } = event,
        scrollLeft = window.getScrollLeft(),
        mouseLeft = pageX + scrollLeft;

  return mouseLeft;
}

function mouseUpHandler(event, element) {
  window.off("blur", mouseUpHandler, this);  ///

  window.offMouseUp(mouseUpHandler, this);

  window.offMouseMove(mouseMoveHandler, this);

  const dragging = this.isDragging();

  if (dragging) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.stopDrag(mouseTop, mouseLeft);
  } else {
    this.stopWaitingToDrag();
  }
}

function mouseDownHandler(event, element) {
  const { button } = event;

  window.on("blur", mouseUpHandler, this); ///

  window.onMouseUp(mouseUpHandler, this);

  window.onMouseMove(mouseMoveHandler, this);

  if (button === LEFT_MOUSE_BUTTON) {
    const dragging = this.isDragging();

    if (!dragging) {
      const mouseTop = mouseTopFromEvent(event),
            mouseLeft = mouseLeftFromEvent(event);

      this.startWaitingToDrag(mouseTop, mouseLeft);
    }
  }
}

function mouseMoveHandler(event, element) {
  const mouseTop = mouseTopFromEvent(event),
        mouseLeft = mouseLeftFromEvent(event);

  const dragging = this.isDragging();

  if (dragging) {
    this.dragging(mouseTop, mouseLeft);
  }
}

