"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _draggable = _interopRequireDefault(require("../../mixins/draggable"));
var _coordinates = _interopRequireDefault(require("../../mixins/coordinates"));
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
        ";\n  position: absolute;\n  \n  .dragging {\n    position: fixed;\n    z-index: 10000;\n  }\n\n"
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
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var squareDivWidth = _sufficient.controller.getSquareDivWidth(), squareDivHeight = _sufficient.controller.getSquareDivHeight();
                console.log("drag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight));
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(relativeMouseTop, relativeMouseLeft) {
                var squareDivWidth = _sufficient.controller.getSquareDivWidth(), squareDivHeight = _sufficient.controller.getSquareDivHeight();
                console.log("stopdrag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight));
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(relativeMouseTop, relativeMouseLeft) {
                var squareDivWidth = _sufficient.controller.getSquareDivWidth(), squareDivHeight = _sufficient.controller.getSquareDivHeight();
                console.log("startdrag", Math.floor(relativeMouseLeft / squareDivWidth), Math.floor(relativeMouseTop / squareDivHeight));
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.applyCoordinates(this.coordinates);
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.onStartDrag(this.startDragHandler, this);
                this.enableDragging();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDragging();
                this.offDrag(this.dragHandler, this);
                this.offStopDrag(this.stopDragHandler, this);
                this.offStartDrag(this.startDragHandler, this);
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
Object.assign(PieceDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgcGllY2VEaXZXaWR0aCwgcGllY2VEaXZIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFBpZWNlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGRyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSBjb250cm9sbGVyLmdldFNxdWFyZURpdldpZHRoKCksXG4gICAgICAgICAgc3F1YXJlRGl2SGVpZ2h0ID0gY29udHJvbGxlci5nZXRTcXVhcmVEaXZIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZHJhZ1wiLCBNYXRoLmZsb29yKHJlbGF0aXZlTW91c2VMZWZ0IC8gc3F1YXJlRGl2V2lkdGgpLCBNYXRoLmZsb29yKHJlbGF0aXZlTW91c2VUb3AgLyBzcXVhcmVEaXZIZWlnaHQpKVxuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSBjb250cm9sbGVyLmdldFNxdWFyZURpdldpZHRoKCksXG4gICAgICAgICAgc3F1YXJlRGl2SGVpZ2h0ID0gY29udHJvbGxlci5nZXRTcXVhcmVEaXZIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3RvcGRyYWdcIiwgTWF0aC5mbG9vcihyZWxhdGl2ZU1vdXNlTGVmdCAvIHNxdWFyZURpdldpZHRoKSwgTWF0aC5mbG9vcihyZWxhdGl2ZU1vdXNlVG9wIC8gc3F1YXJlRGl2SGVpZ2h0KSlcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZXaWR0aCA9IGNvbnRyb2xsZXIuZ2V0U3F1YXJlRGl2V2lkdGgoKSxcbiAgICAgICAgICBzcXVhcmVEaXZIZWlnaHQgPSBjb250cm9sbGVyLmdldFNxdWFyZURpdkhlaWdodCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJzdGFydGRyYWdcIiwgTWF0aC5mbG9vcihyZWxhdGl2ZU1vdXNlTGVmdCAvIHNxdWFyZURpdldpZHRoKSwgTWF0aC5mbG9vcihyZWxhdGl2ZU1vdXNlVG9wIC8gc3F1YXJlRGl2SGVpZ2h0KSlcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnZ2luZygpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJhZ2dpbmcoKTtcblxuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwaWVjZURpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcyk7XG5cbiAgICBwaWVjZURpdi5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gcGllY2VEaXY7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGRyYWdnYWJsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGllY2VEaXYpYFxuXG4gIHdpZHRoOiAke3BpZWNlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7cGllY2VEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAg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