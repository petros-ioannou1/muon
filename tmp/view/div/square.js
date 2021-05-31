"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../mixins/coordinates"));
var _styles = require("../../styles");
var _colours = require("../../colours");
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
        ";\n  position: absolute;\n  \n  .black {\n    background-color: ",
        ";\n  }\n  \n  .white {\n    background-color: ",
        ";\n  }\n  \n  .highlighted {\n    border: 3px solid ",
        ";\n  }\n  \n  .highlighted-move::after {\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    z-index: 1;\n    content: \" \";\n    opacity: 75%;\n    position: absolute;\n    border-radius: 50%;\n    background-color: ",
        ";\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SquareDiv = function(Element1) {
    _inherits(SquareDiv, _easy.Element);
    function SquareDiv(selector, coordinates) {
        _classCallCheck(this, SquareDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SquareDiv).call(this, selector));
        _this.coordinates = coordinates;
        return _this;
    }
    _createClass(SquareDiv, [
        {
            key: "getCoordinates",
            value: function getCoordinates() {
                return this.coordinates;
            }
        },
        {
            key: "matchCoordinates",
            value: function matchCoordinates(coordinates) {
                var matchesCoordinates = this.coordinates.match(coordinates);
                return matchesCoordinates;
            }
        },
        {
            key: "highlight",
            value: function highlight() {
                this.addClass("highlighted");
            }
        },
        {
            key: "unhighlight",
            value: function unhighlight() {
                this.removeClass("highlighted");
            }
        },
        {
            key: "highlightMove",
            value: function highlightMove() {
                this.addClass("highlighted-move");
            }
        },
        {
            key: "unhighlightMove",
            value: function unhighlightMove() {
                this.removeClass("highlighted-move");
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var x = this.coordinates.getX(), y = this.coordinates.getY(), black = (x + y) % 2 === 0;
                black ? this.addClass("black") : this.addClass("white");
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getSquareDivWidth = this.getWidth.bind(this), getSquareDivHeight = this.getHeight.bind(this);
                return {
                    getSquareDivWidth: getSquareDivWidth,
                    getSquareDivHeight: getSquareDivHeight
                };
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var coordinates = properties.coordinates, squareDiv = _easy.Element.fromClass(Class, properties, coordinates);
                return squareDiv;
            }
        }
    ]);
    return SquareDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SquareDiv, "tagName", "div");
_defineProperty(SquareDiv, "defaultProperties", {
    className: "square"
});
Object.assign(SquareDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.darkBrown, _colours.lightBrown, _colours.plainBlack, _colours.midGrey);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBzcXVhcmVEaXZXaWR0aCwgc3F1YXJlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgbWlkR3JleSwgZGFya0Jyb3duLCBsaWdodEJyb3duLCBwbGFpbkJsYWNrIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuY2xhc3MgU3F1YXJlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbWF0Y2hDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IG1hdGNoZXNDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMubWF0Y2goY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNDb29yZGluYXRlcztcbiAgfVxuXG4gIGhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cblxuICB1bmhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cblxuICBoaWdobGlnaHRNb3ZlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWdobGlnaHRlZC1tb3ZlXCIpO1xuICB9XG5cbiAgdW5oaWdobGlnaHRNb3ZlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRlZC1tb3ZlXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuY29vcmRpbmF0ZXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSB0aGlzLmNvb3JkaW5hdGVzLmdldFkoKSxcbiAgICAgICAgICBibGFjayA9ICgoeCArIHkpICUgMikgPT09IDA7XG5cbiAgICBibGFjayA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiYmxhY2tcIikgOlxuICAgICAgICB0aGlzLmFkZENsYXNzKFwid2hpdGVcIik7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0U3F1YXJlRGl2V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0U3F1YXJlRGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0U3F1YXJlRGl2V2lkdGgsXG4gICAgICBnZXRTcXVhcmVEaXZIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNxdWFyZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3F1YXJlRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXY7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcXVhcmVEaXYucHJvdG90eXBlLCBjb29yZGluYXRlc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcXVhcmVEaXYpYFxuXG4gIHdpZHRoOiAke3NxdWFyZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3NxdWFyZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIC5ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrQnJvd259O1xuICB9XG4gIFxuICAud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7bGlnaHRCcm93bn07XG4gIH1cbiAgXG4gIC5oaWdobGlnaHRlZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHtwbGFpbkJsYWNrfTtcbiAgfVxuICBcbiAgLmhpZ2hsaWdodGVkLW1vdmU6OmFmdGVyIHtcbiAgICB0b3A6IDI1JTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIG9wYWNpdHk6IDc1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7bWlkR3JleX07XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRUEsWUFBMEI7SUFFUixPQUFjO0lBQ0gsUUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2RXRDLGFBRTNCO1NBQWlCLGFBQ2hCO1NBQWtCLGdFQUlOO1NBQVksOENBSVo7U0FBYSxvREFJYjtTQUFhLDZPQWFiO1NBQVUsWUFHaEM7Ozs7Ozs7SUExR00sU0FBUyxZQUFTLFFBQU87Y0FBekIsU0FBUyxFQVBTLEtBQU07YUFPeEIsU0FBUyxDQUNELFFBQVEsRUFBRSxXQUFXOzhCQUQ3QixTQUFTOztpRUFBVCxTQUFTLGFBRUwsUUFBUTtjQUVULFdBQVcsR0FBRyxXQUFXOzs7aUJBSjVCLFNBQVM7O1lBT2IsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYzs0QkFDQSxXQUFXOzs7O1lBR3pCLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsV0FBVztvQkFDcEIsa0JBQWtCLFFBQVEsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO3VCQUV0RCxrQkFBa0I7Ozs7WUFHM0IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztxQkFDRixRQUFRLEVBQUMsV0FBYTs7OztZQUc3QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLFdBQVcsRUFBQyxXQUFhOzs7O1lBR2hDLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7cUJBQ04sUUFBUSxFQUFDLGdCQUFrQjs7OztZQUdsQyxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlO3FCQUNSLFdBQVcsRUFBQyxnQkFBa0I7Ozs7WUFHckMsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDQSxDQUFDLFFBQVEsV0FBVyxDQUFDLElBQUksSUFDekIsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxJQUFJLElBQ3pCLEtBQUssSUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDO2dCQUVqQyxLQUFLLFFBQ0UsUUFBUSxFQUFDLEtBQU8sVUFDZCxRQUFRLEVBQUMsS0FBTztxQkFFcEIsZ0JBQWdCLE1BQU0sV0FBVzs7OztZQUd4QyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzs7O1lBSVgsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxpQkFBaUIsUUFBUSxRQUFRLENBQUMsSUFBSSxRQUN0QyxrQkFBa0IsUUFBUSxTQUFTLENBQUMsSUFBSTs7b0JBRzVDLGlCQUFpQixFQUFqQixpQkFBaUI7b0JBQ2pCLGtCQUFrQixFQUFsQixrQkFBa0I7Ozs7OztZQVVmLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVTtvQkFDeEIsV0FBVyxHQUFLLFVBQVUsQ0FBMUIsV0FBVyxFQUNiLFNBQVMsR0ExRUssS0FBTSxTQTBFQSxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXO3VCQUUzRCxTQUFTOzs7O1dBckVkLFNBQVM7bUJBUFMsS0FBTTtnQkFPeEIsU0FBUyxHQTJETixPQUFPLElBQUcsR0FBSztnQkEzRGxCLFNBQVMsR0E2RE4saUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFROztBQVd2QixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBOUVILFlBQTBCO2VBSmxDLGNBQWlCLFNBb0ZkLFNBQVMscUJBOUVjLE9BQWMsaUJBQWQsT0FBYyxrQkFDSCxRQUFlLFlBQWYsUUFBZSxhQUFmLFFBQWUsYUFBZixRQUFlIn0=