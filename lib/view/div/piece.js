"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _move = _interopRequireDefault(require("../../move"));
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _draggable = _interopRequireDefault(require("../../mixins/draggable"));
var _coordinates1 = _interopRequireDefault(require("../../mixins/coordinates"));
var _coordinates2 = require("../../utilitites/coordinates");
var _styles = require("../../styles");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  position: absolute;\n  \n  .dragging {\n    z-index: 1;\n    position: fixed;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PieceDiv = function(Element1) {
    _inherits(PieceDiv, _easy.Element);
    function PieceDiv(selector, coordinates) {
        _classCallCheck(this, PieceDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PieceDiv).call(this, selector));
        _this.coordinates = coordinates;
        return _this;
    }
    _createClass(PieceDiv, [
        {
            key: "getCoordinates",
            value: function getCoordinates() {
                return this.coordinates;
            }
        },
        {
            key: "setCoordinates",
            value: function setCoordinates(coordinates) {
                this.coordinates = coordinates;
            }
        },
        {
            key: "draggingHandler",
            value: function draggingHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = _coordinates2.coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                _sufficient.controller.unhighlightCoordinates();
                if (coordinatesValid) {
                    _sufficient.controller.highlightCoordinates(coordinates);
                }
            }
        },
        {
            key: "stopDraggingHandler",
            value: function stopDraggingHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = _coordinates2.coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                coordinatesValid ? this.move(coordinates) : this.move(this.coordinates);
                _sufficient.controller.unhighlightCoordinates();
            }
        },
        {
            key: "mouseOutHandler",
            value: function mouseOutHandler(event, element) {
                _sufficient.controller.unhighlightMoves();
            }
        },
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                var moves = this.generateMoves();
                _sufficient.controller.highlightMoves(moves);
            }
        },
        {
            key: "generateMoves",
            value: function generateMoves() {
                var _this = this, _loop = function(magnitude) {
                    directions.forEach((function(direction) {
                        var relativeCoordinates = _coordinates.default.fromMagnitudeAndDirection(magnitude, direction), coordinates = _this.coordinates.add(relativeCoordinates), coordinatesValid = coordinates.areValid();
                        if (coordinatesValid) {
                            var pieceDiv = _this, move = _move.default.fromPieceDivAndCoordinates(pieceDiv, coordinates);
                            moves.push(move);
                        }
                    }).bind(_this));
                };
                var moves = [], _constructor = this.constructor, directions = _constructor.directions, maximumMagnitude = _constructor.maximumMagnitude;
                for(var magnitude = 1; magnitude <= maximumMagnitude; magnitude++)_loop(magnitude);
                return moves;
            }
        },
        {
            key: "move",
            value: function move(coordinates) {
                this.coordinates = coordinates;
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onMouseOut(this.mouseOutHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.onDragging(this.draggingHandler, this);
                this.onStopDragging(this.stopDraggingHandler, this);
                this.enableDragging();
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDragging();
                this.offDragging(this.draggingHandler, this);
                this.offStopDragging(this.stopDraggingHandler, this);
                this.offMouseOver(this.mouseOverHandler, this);
                this.offMouseOut(this.mouseOutHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, SVG = _constructor.SVG;
                return( /*#__PURE__*/ React.createElement(SVG, null));
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var coordinates = properties.coordinates, pieceDiv = _easy.Element.fromClass(Class, properties, coordinates);
                return pieceDiv;
            }
        }
    ]);
    return PieceDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PieceDiv, "tagName", "div");
_defineProperty(PieceDiv, "defaultProperties", {
    className: "piece"
});
Object.assign(PieceDiv.prototype, _draggable.default);
Object.assign(PieceDiv.prototype, _coordinates1.default);
var _default = _easyWithStyle.default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IE1vdmUgZnJvbSBcIi4uLy4uL21vdmVcIjtcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi4vLi4vY29vcmRpbmF0ZXNcIjtcbmltcG9ydCBkcmFnZ2FibGVNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9kcmFnZ2FibGVcIjtcbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IGNvb3JkaW5hdGVzRnJvbVRvcEFuZExlZnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aXRlcy9jb29yZGluYXRlc1wiO1xuaW1wb3J0IHsgcGllY2VEaXZXaWR0aCwgcGllY2VEaXZIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFBpZWNlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICB9XG5cbiAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBkcmFnZ2luZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc0Zyb21Ub3BBbmRMZWZ0KHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSxcbiAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0Q29vcmRpbmF0ZXMoKTtcblxuICAgIGlmIChjb29yZGluYXRlc1ZhbGlkKSB7XG4gICAgICBjb250cm9sbGVyLmhpZ2hsaWdodENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICBzdG9wRHJhZ2dpbmdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgY29vcmRpbmF0ZXNWYWxpZCA/XG4gICAgICB0aGlzLm1vdmUoY29vcmRpbmF0ZXMpIDpcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodENvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0TW92ZXMoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2VuZXJhdGVNb3ZlcygpO1xuXG4gICAgY29udHJvbGxlci5oaWdobGlnaHRNb3Zlcyhtb3Zlcyk7XG4gIH1cblxuICBnZW5lcmF0ZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW10sXG4gICAgICAgICAgeyBkaXJlY3Rpb25zLCBtYXhpbXVtTWFnbml0dWRlIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgZm9yIChsZXQgbWFnbml0dWRlID0gMTsgbWFnbml0dWRlIDw9IG1heGltdW1NYWduaXR1ZGU7IG1hZ25pdHVkZSsrKSB7XG4gICAgICBkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbU1hZ25pdHVkZUFuZERpcmVjdGlvbihtYWduaXR1ZGUsIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVDb29yZGluYXRlcyksXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgICAgIGlmIChjb29yZGluYXRlc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc3QgcGllY2VEaXYgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgICAgbW92ZSA9IE1vdmUuZnJvbVBpZWNlRGl2QW5kQ29vcmRpbmF0ZXMocGllY2VEaXYsIGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgIG1vdmVzLnB1c2gobW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdnaW5nKHRoaXMuZHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZ2dpbmcodGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZ2dpbmcoKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyYWdnaW5nKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdnaW5nKHRoaXMuZHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWdnaW5nKHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwaWVjZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGllY2VEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHBpZWNlRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBkcmFnZ2FibGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBpZWNlRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG5gO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDSCxXQUFZO0lBRXRCLEtBQVk7SUFDTCxZQUFtQjtJQUNmLFVBQXdCO0lBQ3RCLGFBQTBCO0lBRWQsYUFBOEI7SUFDMUIsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxSXpCLGFBRTFCO1NBQWdCLGFBQ2Y7U0FBaUIsMkZBUTNCOzs7Ozs7O0lBOUlNLFFBQVEsWUFBUyxRQUFPO2NBQXhCLFFBQVEsRUFYVSxLQUFNO2FBV3hCLFFBQVEsQ0FDQSxRQUFRLEVBQUUsV0FBVzs4QkFEN0IsUUFBUTs7aUVBQVIsUUFBUSxhQUVKLFFBQVE7Y0FFVCxXQUFXLEdBQUcsV0FBVzs7O2lCQUo1QixRQUFR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