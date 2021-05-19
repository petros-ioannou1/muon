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
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates);
                _sufficient.controller.unhighlightSquareDiv();
                _sufficient.controller.highlightSquareDiv(coordinates);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                coordinatesValid ? this.move(coordinates) : this.move(this.coordinates);
                _sufficient.controller.unhighlightSquareDiv();
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
                var moves = [];
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
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.enableDragging();
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDragging();
                this.offMouseOver(this.mouseOverHandler, this);
                this.offMouseOut(this.mouseOutHandler, this);
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
function coordinatesFromTopAndLeft(top, left) {
    var y = _coordinates2.yFromTop(top), x = _coordinates2.xFromLeft(left), coordinates = _coordinates.default.fromXAndY(x, y);
    return coordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgeUZyb21Ub3AsIHhGcm9tTGVmdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpdGVzL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgeyBwaWVjZURpdldpZHRoLCBwaWVjZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgUGllY2VEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGRyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodFNxdWFyZURpdigpO1xuXG4gICAgY29udHJvbGxlci5oaWdobGlnaHRTcXVhcmVEaXYoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgY29vcmRpbmF0ZXNWYWxpZCA/XG4gICAgICB0aGlzLm1vdmUoY29vcmRpbmF0ZXMpIDpcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodFNxdWFyZURpdigpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodE1vdmVzKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgbW92ZXMgPSB0aGlzLmdlbmVyYXRlTW92ZXMoKTtcblxuICAgIGNvbnRyb2xsZXIuaGlnaGxpZ2h0TW92ZXMobW92ZXMpO1xuICB9XG5cbiAgZ2VuZXJhdGVNb3ZlcygpIHtcbiAgICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgbW92ZShjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWdnaW5nKCk7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcmFnZ2luZygpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGllY2VcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBpZWNlRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzKTtcblxuICAgIHBpZWNlRGl2LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBwaWVjZURpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgZHJhZ2dhYmxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBjb29yZGluYXRlc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQaWVjZURpdilgXG5cbiAgd2lkdGg6ICR7cGllY2VEaXZXaWR0aH07XG4gIGhlaWdodDogJHtwaWVjZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuYDtcblxuZnVuY3Rpb24gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdCh0b3AsIGxlZnQpIHtcbiAgY29uc3QgeSA9IHlGcm9tVG9wKHRvcCksXG4gICAgICAgIHggPSB4RnJvbUxlZnQobGVmdCksXG4gICAgICAgIGNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpO1xuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNILFdBQVk7SUFFZixZQUFtQjtJQUNmLFVBQXdCO0lBQ3RCLGFBQTBC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