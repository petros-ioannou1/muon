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
                _sufficient.controller.unhighlightMoves();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IE1vdmUgZnJvbSBcIi4uLy4uL21vdmVcIjtcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi4vLi4vY29vcmRpbmF0ZXNcIjtcbmltcG9ydCBkcmFnZ2FibGVNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9kcmFnZ2FibGVcIjtcbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IGNvb3JkaW5hdGVzRnJvbVRvcEFuZExlZnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aXRlcy9jb29yZGluYXRlc1wiO1xuaW1wb3J0IHsgcGllY2VEaXZXaWR0aCwgcGllY2VEaXZIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFBpZWNlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICB9XG5cbiAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBkcmFnZ2luZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc0Zyb21Ub3BBbmRMZWZ0KHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSxcbiAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0Q29vcmRpbmF0ZXMoKTtcblxuICAgIGlmIChjb29yZGluYXRlc1ZhbGlkKSB7XG4gICAgICBjb250cm9sbGVyLmhpZ2hsaWdodENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICBzdG9wRHJhZ2dpbmdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgY29vcmRpbmF0ZXNWYWxpZCA/XG4gICAgICB0aGlzLm1vdmUoY29vcmRpbmF0ZXMpIDpcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodE1vdmVzKCk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0Q29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnRyb2xsZXIudW5oaWdobGlnaHRNb3ZlcygpO1xuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZW5lcmF0ZU1vdmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmhpZ2hsaWdodE1vdmVzKG1vdmVzKTtcbiAgfVxuXG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXSxcbiAgICAgICAgICB7IGRpcmVjdGlvbnMsIG1heGltdW1NYWduaXR1ZGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBmb3IgKGxldCBtYWduaXR1ZGUgPSAxOyBtYWduaXR1ZGUgPD0gbWF4aW11bU1hZ25pdHVkZTsgbWFnbml0dWRlKyspIHtcbiAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQ29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tTWFnbml0dWRlQW5kRGlyZWN0aW9uKG1hZ25pdHVkZSwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzVmFsaWQpIHtcbiAgICAgICAgICBjb25zdCBwaWVjZURpdiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgICBtb3ZlID0gTW92ZS5mcm9tUGllY2VEaXZBbmRDb29yZGluYXRlcyhwaWVjZURpdiwgY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgbW92ZShjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ2dpbmcodGhpcy5kcmFnZ2luZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnZ2luZyh0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnZ2luZygpO1xuXG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKHRoaXMuY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJhZ2dpbmcoKTtcblxuICAgIHRoaXMub2ZmRHJhZ2dpbmcodGhpcy5kcmFnZ2luZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZ2dpbmcodGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcblxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwaWVjZURpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gcGllY2VEaXY7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGRyYWdnYWJsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGllY2VEaXYpYFxuXG4gIHdpZHRoOiAke3BpZWNlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7cGllY2VEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbmA7XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNILFdBQVk7SUFFdEIsS0FBWTtJQUNMLFlBQW1CO0lBQ2YsVUFBd0I7SUFDdEIsYUFBMEI7SUFFZCxhQUE4QjtJQUMxQixPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVJekIsYUFFMUI7U0FBZ0IsYUFDZjtTQUFpQiwyRkFRM0I7Ozs7Ozs7SUFoSk0sUUFBUSxZQUFTLFFBQU87Y0FBeEIsUUFBUSxFQVhVLEtBQU07YUFXeEIsUUFBUSxDQUNBLFFBQVEsRUFBRSxXQUFXOzhCQUQ3QixRQUFROztpRUFBUixRQUFRLGFBRUos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