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
var _coordinates1 = require("../../utilitites/coordinates");
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
                var relativeMouseCoordinates = _coordinates1.coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                _sufficient.controller.unhighlightCoordinates();
                if (coordinatesValid) {
                    _sufficient.controller.highlightCoordinates(coordinates);
                }
            }
        },
        {
            key: "stopDraggingHandler",
            value: function stopDraggingHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = _coordinates1.coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
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
Object.assign(PieceDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpdGVzL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgeyBwaWVjZURpdldpZHRoLCBwaWVjZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgUGllY2VEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGRyYWdnaW5nSGFuZGxlcihyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzRnJvbVRvcEFuZExlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBjb29yZGluYXRlc1ZhbGlkID0gY29vcmRpbmF0ZXMuYXJlVmFsaWQoKTtcblxuICAgIGNvbnRyb2xsZXIudW5oaWdobGlnaHRDb29yZGluYXRlcygpO1xuXG4gICAgaWYgKGNvb3JkaW5hdGVzVmFsaWQpIHtcbiAgICAgIGNvbnRyb2xsZXIuaGlnaGxpZ2h0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BEcmFnZ2luZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc0Zyb21Ub3BBbmRMZWZ0KHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSxcbiAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICBjb29yZGluYXRlc1ZhbGlkID9cbiAgICAgIHRoaXMubW92ZShjb29yZGluYXRlcykgOlxuICAgICAgICB0aGlzLm1vdmUodGhpcy5jb29yZGluYXRlcyk7XG5cbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0Q29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnRyb2xsZXIudW5oaWdobGlnaHRNb3ZlcygpO1xuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZW5lcmF0ZU1vdmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmhpZ2hsaWdodE1vdmVzKG1vdmVzKTtcbiAgfVxuXG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdnaW5nKHRoaXMuZHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZ2dpbmcodGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZ2dpbmcoKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyYWdnaW5nKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdnaW5nKHRoaXMuZHJhZ2dpbmdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWdnaW5nKHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwaWVjZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGllY2VEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHBpZWNlRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBkcmFnZ2FibGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBpZWNlRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG5gO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDSCxXQUFZO0lBRVgsVUFBd0I7SUFDdEIsWUFBMEI7SUFFZCxhQUE4QjtJQUMxQixPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXFIekIsYUFFMUI7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