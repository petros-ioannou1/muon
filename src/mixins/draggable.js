"use strict";

import { window, constants } from "easy";

import { START_DRAGGING_DELAY } from "../constants";

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

      const draggableMouseOver = this.isDraggableMouseOver(mouseTop, mouseLeft);

      if (draggableMouseOver) {
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

function drag(mouseTop, mouseLeft) {
  const topOffset = this.getTopOffset(),
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

  if (this.hasOwnProperty("dragEventListeners")) {
    this.dragEventListeners.forEach((dragEventListener) => {
      dragEventListener(relativeMouseTop, relativeMouseLeft);
    });
  }
}

function onDrag(dragHandler, element) {
  this.addDragEventListener(dragHandler, element);
}

function offDrag(dragHandler, element) {
  this.removeDragEventListener(dragHandler, element);
}

function enableDragging() {
  this.onMouseDown(this.draggableMouseDownHandler, this);
}

function disableDragging() {
  this.offMouseDown(this.draggableMouseDownHandler, this);
}

function isDraggableMouseOver(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        boundsOverlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft),
        draggableMouseOver = boundsOverlappingMouse; ///

  return draggableMouseOver;
}

function draggableMouseDownHandler(event, element) {
  const { button } = event;

  window.on("blur", this.draggableMouseUpHandler, this); ///

  window.onMouseUp(this.draggableMouseUpHandler, this);

  window.onMouseMove(this.draggableMouseMoveHandler, this);

  if (button === LEFT_MOUSE_BUTTON) {
    const dragging = this.isDragging();

    if (!dragging) {
      const mouseTop = mouseTopFromEvent(event),
            mouseLeft = mouseLeftFromEvent(event);

      this.startWaitingToDrag(mouseTop, mouseLeft);
    }
  }
}

function draggableMouseMoveHandler(event, element) {
  const mouseTop = mouseTopFromEvent(event),
        mouseLeft = mouseLeftFromEvent(event);

  const dragging = this.isDragging();

  if (dragging) {
    this.dragging(mouseTop, mouseLeft);
  }
}

function draggableMouseUpHandler(event, element) {
  window.off("blur", this.draggableMouseUpHandler, this);  ///

  window.offMouseUp(this.draggableMouseUpHandler, this);

  window.offMouseMove(this.draggableMouseMoveHandler, this);

  const dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  } else {
    this.stopWaitingToDrag();
  }
}

function addDragEventListener(dragHandler, element = this) {
  if (!this.hasOwnProperty("dragEventListeners")) {
    this.dragEventListeners = [];
  }

  const dragEventListener = createDragEventListener(dragHandler, element);

  this.dragEventListeners.push(dragEventListener);
}

function removeDragEventListener(dragHandler, element = this) {
  const dragEventListener = this.findDragEventListener(dragHandler, element),
        index = this.dragEventListeners.indexOf(dragEventListener),
        start = index,  ///
        deleteCount = 1;

  this.dragEventListeners.splice(start, deleteCount);

  if (this.dragEventListeners.length === 0) {
    delete this.dragEventListeners;
  }
}

function createDragEventListener(dragHandler, element) {
  let dragEventListener;

  dragEventListener = (relativeMouseTop, relativeMouseLeft) => {
    dragHandler.call(element, relativeMouseTop, relativeMouseLeft)
  };

  Object.assign(dragEventListener, {
    element,
    dragHandler
  });

  return dragEventListener;
}

function findDragEventListener(dragHandler, element) {
  const eventListener = this.dragEventListeners.find((dragEventListener) => {
    const found = ( (dragEventListener.element === element) &&
                    (dragEventListener.dragHandler === dragHandler));

    if (found) {
      return true;
    }
  });

  return eventListener;
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
  startWaitingToDrag,
  stopWaitingToDrag,
  startDragging,
  stopDragging,
  dragging,
  drag,
  onDrag,
  offDrag,
  enableDragging,
  disableDragging,
  isDraggableMouseOver,
  draggableMouseDownHandler,
  draggableMouseMoveHandler,
  draggableMouseUpHandler,
  addDragEventListener,
  removeDragEventListener,
  createDragEventListener,
  findDragEventListener,
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
