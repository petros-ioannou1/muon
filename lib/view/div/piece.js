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
                var relativeCoordinates = coordinatesFromMouseTopAndMouseLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeCoordinates), coordinatesValid = coordinates.areValid();
                if (coordinatesValid) {
                    this.move(relativeCoordinates);
                }
                _sufficient.controller.unhighlightSquareDiv();
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "move",
            value: function move(relativeCoordinates) {
                this.coordinates = this.coordinates.add(relativeCoordinates);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgSEFMRiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBQaWVjZURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlcztcbiAgfVxuXG4gIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tTW91c2VUb3BBbmRNb3VzZUxlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVDb29yZGluYXRlcyk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0U3F1YXJlRGl2KCk7XG5cbiAgICBjb250cm9sbGVyLmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcyk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tTW91c2VUb3BBbmRNb3VzZUxlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVDb29yZGluYXRlcyksXG4gICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICBpZiAoY29vcmRpbmF0ZXNWYWxpZCkge1xuICAgICAgdGhpcy5tb3ZlKHJlbGF0aXZlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIudW5oaWdobGlnaHRTcXVhcmVEaXYoKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdmUocmVsYXRpdmVDb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZ2dpbmcoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyYWdnaW5nKCk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwaWVjZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGllY2VEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcGllY2VEaXYuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHBpZWNlRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBkcmFnZ2FibGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBpZWNlRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG5gO1xuXG5mdW5jdGlvbiBjb29yZGluYXRlc0Zyb21Nb3VzZVRvcEFuZE1vdXNlTGVmdChtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IHNxdWFyZURpdldpZHRoID0gY29udHJvbGxlci5nZXRTcXVhcmVEaXZXaWR0aCgpLFxuICAgICAgICBzcXVhcmVEaXZIZWlnaHQgPSBjb250cm9sbGVyLmdldFNxdWFyZURpdkhlaWdodCgpLFxuICAgICAgICB4ID0gTWF0aC5mbG9vcigobW91c2VMZWZ0IC8gc3F1YXJlRGl2V2lkdGgpICsgSEFMRiksXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKCgtbW91c2VUb3AgLyBzcXVhcmVEaXZIZWlnaHQpICsgSEFMRiksXG4gICAgICAgIGNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpO1xuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNILFdBQVk7SUFFZixZQUFtQjtJQUNmLFVBQXdCO0lBQ3RCLGFBQTBCO0lBRW5DLFVBQWlCO0lBQ1EsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErRnpCLGFBRTFCO1NBQWdCLGFBQ2Y7U0FBaUIsMkZBUTNCOzs7Ozs7O0lBeEdNLFFBQVEsWUFBUyxRQUFPO2NBQXhCLFFBQVEsRUFWVSxLQUFNO2FBVXhCLFFBQVEsQ0FDQSxRQUFRLEVBQUUsV0FBVzs4QkFEN0IsUUFB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