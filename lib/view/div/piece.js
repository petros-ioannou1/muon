"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _draggable = _interopRequireDefault(require("../../mixins/draggable"));
var _coordinates1 = _interopRequireDefault(require("../../mixins/coordinates"));
var _constants = require("../../constants");
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
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeCoordinates = coordinatesFromMouseTopAndMouseLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeCoordinates);
                _sufficient.controller.unhighlightSquareDiv();
                _sufficient.controller.highlightSquareDiv(coordinates);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeCoordinates = coordinatesFromMouseTopAndMouseLeft(relativeMouseTop, relativeMouseLeft);
                _sufficient.controller.unhighlightSquareDiv();
                this.move(relativeCoordinates);
            }
        },
        {
            key: "move",
            value: function move(relativeCoordinates) {
                this.coordinates = this.coordinates.add(relativeCoordinates);
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.applyCoordinates(this.coordinates);
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.enableDragging();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDragging();
                this.offStopDrag(this.stopDragHandler, this);
                this.offDrag(this.dragHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, SVG = _constructor.SVG;
                return( /*#__PURE__*/ React.createElement(SVG, null));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var coordinates = properties.coordinates, pieceDiv = _easy.Element.fromClass(Class, properties, coordinates);
                pieceDiv.initialise();
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
function coordinatesFromMouseTopAndMouseLeft(mouseTop, mouseLeft) {
    var squareDivWidth = _sufficient.controller.getSquareDivWidth(), squareDivHeight = _sufficient.controller.getSquareDivHeight(), x = Math.floor(mouseLeft / squareDivWidth + _constants.HALF), y = Math.floor(-mouseTop / squareDivHeight + _constants.HALF), coordinates = _coordinates.default.fromXAndY(x, y);
    return coordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgSEFMRiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBQaWVjZURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlcztcbiAgfVxuXG4gIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tTW91c2VUb3BBbmRNb3VzZUxlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVDb29yZGluYXRlcyk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0U3F1YXJlRGl2KCk7XG5cbiAgICBjb250cm9sbGVyLmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcyk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tTW91c2VUb3BBbmRNb3VzZUxlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodFNxdWFyZURpdigpO1xuXG4gICAgdGhpcy5tb3ZlKHJlbGF0aXZlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW92ZShyZWxhdGl2ZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKHRoaXMuY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5vbkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnZ2luZygpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJhZ2dpbmcoKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwaWVjZURpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcyk7XG5cbiAgICBwaWVjZURpdi5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gcGllY2VEaXY7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGRyYWdnYWJsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGllY2VEaXYpYFxuXG4gIHdpZHRoOiAke3BpZWNlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7cGllY2VEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbmA7XG5cbmZ1bmN0aW9uIGNvb3JkaW5hdGVzRnJvbU1vdXNlVG9wQW5kTW91c2VMZWZ0KG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSBjb250cm9sbGVyLmdldFNxdWFyZURpdldpZHRoKCksXG4gICAgICAgIHNxdWFyZURpdkhlaWdodCA9IGNvbnRyb2xsZXIuZ2V0U3F1YXJlRGl2SGVpZ2h0KCksXG4gICAgICAgIHggPSBNYXRoLmZsb29yKChtb3VzZUxlZnQgLyBzcXVhcmVEaXZXaWR0aCkgKyBIQUxGKSxcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoKC1tb3VzZVRvcCAvIHNxdWFyZURpdkhlaWdodCkgKyBIQUxGKSxcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSk7XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0gsV0FBWTtJQUVmLFlBQW1CO0lBQ2YsVUFBd0I7SUFDdEIsYUFBMEI7SUFFbkMsVUFBaUI7SUFDUSxPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTJGekIsYUFFMUI7U0FBZ0IsYUFDZjtTQUFpQiwyRkFRM0I7Ozs7Ozs7SUFwR00sUUFBUSxZQUFTLFFBQU87Y0FBeEIsUUFBUSxFQVZVLEtBQU07YUFVeEIsUUFBUSxDQUNBLFFBQVEsRUFBRSxXQUFXOzhCQUQ3QixRQUFROztpRUFBUixRQUFRLGFBRUosUUFBUTtjQUVULFdBQVcsR0FBRyxXQUFXOzs7aUJBSjVCLFFBQVE7O1lBT1osR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYzs0QkFDQSxXQUFXOzs7O1lBR3pCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxXQUFXO3FCQUNuQixXQUFXLEdB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