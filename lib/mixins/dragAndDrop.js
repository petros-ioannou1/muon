"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _constants = require("../constants");
var LEFT_MOUSE_BUTTON = _easy.constants.LEFT_MOUSE_BUTTON;
function isDragging() {
    var dragging = this.hasClass("dragging");
    return dragging;
}
function isMouseOver(mouseTop, mouseLeft) {
    var bounds = this.getBounds(), boundsOverlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft), mouseOver = boundsOverlappingMouse; ///
    return mouseOver;
}
function startDragging(mouseTop, mouseLeft) {
    var bounds = this.getBounds(), boundsTop = bounds.getTop(), boundsLeft = bounds.getLeft(), topOffset = boundsTop - mouseTop, leftOffset = boundsLeft - mouseLeft;
    this.setTopOffset(topOffset);
    this.setLeftOffset(leftOffset);
    this.addClass("dragging");
    this.drag(mouseTop, mouseLeft);
}
function stopDragging() {
    this.removeClass("dragging");
}
function dragging(mouseTop, mouseLeft) {
    this.drag(mouseTop, mouseLeft);
}
function startWaitingToDrag(mouseTop, mouseLeft) {
    var timeout = this.getTimeout();
    if (timeout === null) {
        timeout = setTimeout((function() {
            this.resetTimeout();
            var mouseOver = this.isMouseOver(mouseTop, mouseLeft);
            if (mouseOver) {
                this.startDragging(mouseTop, mouseLeft);
            }
        }).bind(this), _constants.START_DRAGGING_DELAY);
        this.updateTimeout(timeout);
    }
}
function stopWaitingToDrag() {
    var timeout = this.getTimeout();
    if (timeout !== null) {
        clearTimeout(timeout);
        this.resetTimeout();
    }
}
function mouseDownHandler(event, element) {
    var button = event.button, pageX = event.pageX, pageY = event.pageY, mouseTop = pageY, mouseLeft = pageX; ///
    _easy.window.on("blur", this.mouseUpHandler, this); ///
    _easy.window.onMouseUp(this.mouseUpHandler, this);
    _easy.window.onMouseMove(this.mouseMoveHandler, this);
    if (button === LEFT_MOUSE_BUTTON) {
        var dragging1 = this.isDragging();
        if (!dragging1) {
            this.startWaitingToDrag(mouseTop, mouseLeft);
        }
    }
}
function mouseUpHandler(event, element) {
    _easy.window.off("blur", this.mouseUpHandler, this); ///
    _easy.window.offMouseUp(this.mouseUpHandler, this);
    _easy.window.offMouseMove(this.mouseMoveHandler, this);
    var dragging2 = this.isDragging();
    if (dragging2) {
        this.stopDragging();
    } else {
        this.stopWaitingToDrag();
    }
}
function mouseMoveHandler(event, element) {
    var pageX = event.pageX, pageY = event.pageY, mouseTop = pageY, mouseLeft = pageX; ///
    var dragging2 = this.isDragging();
    if (dragging2) {
        this.dragging(mouseTop, mouseLeft);
    }
}
function drag(mouseTop, mouseLeft) {
    var windowScrollTop = _easy.window.getScrollTop(), windowScrollLeft = _easy.window.getScrollLeft(), topOffset = this.getTopOffset(), leftOffset = this.getLeftOffset();
    var top = mouseTop + topOffset - windowScrollTop, left = mouseLeft + leftOffset - windowScrollLeft;
    top = "".concat(top, "px"); ///
    left = "".concat(left, "px"); ///
    var css = {
        top: top,
        left: left
    };
    this.css(css);
}
function resetTimeout() {
    var timeout = null;
    this.updateTimeout(timeout);
}
function getTimeout() {
    var state = this.getState(), timeout = state.timeout;
    return timeout;
}
function getTopOffset() {
    var state = this.getState(), topOffset = state.topOffset;
    return topOffset;
}
function getLeftOffset() {
    var state = this.getState(), leftOffset = state.leftOffset;
    return leftOffset;
}
function updateTimeout(timeout) {
    this.updateState({
        timeout: timeout
    });
}
function setTopOffset(topOffset) {
    this.updateState({
        topOffset: topOffset
    });
}
function setLeftOffset(leftOffset) {
    this.updateState({
        leftOffset: leftOffset
    });
}
function setInitialState() {
    var timeout = null, topOffset = null, leftOffset = null;
    this.setState({
        timeout: timeout,
        topOffset: topOffset,
        leftOffset: leftOffset
    });
}
var _default = {
    isDragging: isDragging,
    isMouseOver: isMouseOver,
    startDragging: startDragging,
    stopDragging: stopDragging,
    dragging: dragging,
    startWaitingToDrag: startWaitingToDrag,
    stopWaitingToDrag: stopWaitingToDrag,
    mouseDownHandler: mouseDownHandler,
    mouseUpHandler: mouseUpHandler,
    mouseMoveHandler: mouseMoveHandler,
    drag: drag,
    resetTimeout: resetTimeout,
    getTimeout: getTimeout,
    getTopOffset: getTopOffset,
    getLeftOffset: getLeftOffset,
    updateTimeout: updateTimeout,
    setTopOffset: setTopOffset,
    setLeftOffset: setLeftOffset,
    setInitialState: setInitialState
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJhZ0FuZERyb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdywgY29uc3RhbnRzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgU1RBUlRfRFJBR0dJTkdfREVMQVkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04gfSA9IGNvbnN0YW50cztcblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgcmV0dXJuIGRyYWdnaW5nO1xufVxuXG5mdW5jdGlvbiBpc01vdXNlT3Zlcihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCksXG4gICAgICAgIGJvdW5kc092ZXJsYXBwaW5nTW91c2UgPSBib3VuZHMuaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpLFxuICAgICAgICBtb3VzZU92ZXIgPSBib3VuZHNPdmVybGFwcGluZ01vdXNlOyAvLy9cblxuICByZXR1cm4gbW91c2VPdmVyO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdnaW5nKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKSxcbiAgICAgICAgYm91bmRzVG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICBib3VuZHNMZWZ0ID0gYm91bmRzLmdldExlZnQoKSxcbiAgICAgICAgdG9wT2Zmc2V0ID0gYm91bmRzVG9wIC0gbW91c2VUb3AsXG4gICAgICAgIGxlZnRPZmZzZXQgPSBib3VuZHNMZWZ0IC0gbW91c2VMZWZ0O1xuXG4gIHRoaXMuc2V0VG9wT2Zmc2V0KHRvcE9mZnNldCk7XG5cbiAgdGhpcy5zZXRMZWZ0T2Zmc2V0KGxlZnRPZmZzZXQpO1xuXG4gIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICB0aGlzLmRyYWcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHtcbiAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBkcmFnZ2luZyhtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIHRoaXMuZHJhZyhtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRXYWl0aW5nVG9EcmFnKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgbGV0IHRpbWVvdXQgPSB0aGlzLmdldFRpbWVvdXQoKTtcblxuICBpZiAodGltZW91dCA9PT0gbnVsbCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRUaW1lb3V0KCk7XG5cbiAgICAgIGNvbnN0IG1vdXNlT3ZlciA9IHRoaXMuaXNNb3VzZU92ZXIobW91c2VUb3AsIG1vdXNlTGVmdCk7XG5cbiAgICAgIGlmIChtb3VzZU92ZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgICAgfVxuICAgIH0sIFNUQVJUX0RSQUdHSU5HX0RFTEFZKTtcblxuICAgIHRoaXMudXBkYXRlVGltZW91dCh0aW1lb3V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9wV2FpdGluZ1RvRHJhZygpIHtcbiAgY29uc3QgdGltZW91dCA9IHRoaXMuZ2V0VGltZW91dCgpO1xuXG4gIGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgYnV0dG9uLCBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVg7ICAvLy9cblxuICB3aW5kb3cub24oXCJibHVyXCIsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gIGlmIChidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnRXYWl0aW5nVG9EcmFnKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB3aW5kb3cub2ZmKFwiYmx1clwiLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcblxuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdG9wV2FpdGluZ1RvRHJhZygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVg7ICAvLy9cblxuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIHRoaXMuZHJhZ2dpbmcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhZyhtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgIHRvcE9mZnNldCA9IHRoaXMuZ2V0VG9wT2Zmc2V0KCksXG4gICAgICAgIGxlZnRPZmZzZXQgPSB0aGlzLmdldExlZnRPZmZzZXQoKTtcblxuICBsZXQgdG9wID0gbW91c2VUb3AgKyB0b3BPZmZzZXQgLSB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICBsZWZ0ID0gbW91c2VMZWZ0ICsgbGVmdE9mZnNldCAtIHdpbmRvd1Njcm9sbExlZnQ7XG5cbiAgdG9wID0gYCR7dG9wfXB4YDsgLy8vXG4gIGxlZnQgPSBgJHtsZWZ0fXB4YDsgLy8vXG5cbiAgY29uc3QgY3NzID0ge1xuICAgIHRvcCxcbiAgICBsZWZ0XG4gIH07XG5cbiAgdGhpcy5jc3MoY3NzKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRUaW1lb3V0KCkge1xuICBjb25zdCB0aW1lb3V0ID0gbnVsbDtcblxuICB0aGlzLnVwZGF0ZVRpbWVvdXQodGltZW91dCk7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQoKSB7XG4gIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICB7IHRpbWVvdXQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiB0aW1lb3V0O1xufVxuXG5mdW5jdGlvbiBnZXRUb3BPZmZzZXQoKSB7XG4gIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICB7IHRvcE9mZnNldCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIHRvcE9mZnNldDtcbn1cblxuZnVuY3Rpb24gZ2V0TGVmdE9mZnNldCgpIHtcbiAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIHsgbGVmdE9mZnNldCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGxlZnRPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVvdXQodGltZW91dCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0aW1lb3V0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRUb3BPZmZzZXQodG9wT2Zmc2V0KSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRvcE9mZnNldFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TGVmdE9mZnNldChsZWZ0T2Zmc2V0KSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIGxlZnRPZmZzZXRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgIHRvcE9mZnNldCA9IG51bGwsXG4gICAgICAgIGxlZnRPZmZzZXQgPSBudWxsO1xuXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIHRpbWVvdXQsXG4gICAgdG9wT2Zmc2V0LFxuICAgIGxlZnRPZmZzZXRcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNEcmFnZ2luZyxcbiAgaXNNb3VzZU92ZXIsXG4gIHN0YXJ0RHJhZ2dpbmcsXG4gIHN0b3BEcmFnZ2luZyxcbiAgZHJhZ2dpbmcsXG4gIHN0YXJ0V2FpdGluZ1RvRHJhZyxcbiAgc3RvcFdhaXRpbmdUb0RyYWcsXG4gIG1vdXNlRG93bkhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICBkcmFnLFxuICByZXNldFRpbWVvdXQsXG4gIGdldFRpbWVvdXQsXG4gIGdldFRvcE9mZnNldCxcbiAgZ2V0TGVmdE9mZnNldCxcbiAgdXBkYXRlVGltZW91dCxcbiAgc2V0VG9wT2Zmc2V0LFxuICBzZXRMZWZ0T2Zmc2V0LFxuICBzZXRJbml0aWFs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