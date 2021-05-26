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
        ";\n  }\n  \n  .highlighted {\n    border: 4px solid ",
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
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.darkBrown, _colours.lightBrown, _colours.brightRed, _colours.midGrey);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBzcXVhcmVEaXZXaWR0aCwgc3F1YXJlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgbWlkR3JleSwgZGFya0Jyb3duLCBsaWdodEJyb3duLCBicmlnaHRSZWQgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5jbGFzcyBTcXVhcmVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBtYXRjaENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgbWF0Y2hlc0Nvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5tYXRjaChjb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0Nvb3JkaW5hdGVzO1xuICB9XG5cbiAgaGlnaGxpZ2h0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWdobGlnaHRlZFwiKTtcbiAgfVxuXG4gIHVuaGlnaGxpZ2h0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRlZFwiKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE1vdmUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImhpZ2hsaWdodGVkLW1vdmVcIik7XG4gIH1cblxuICB1bmhpZ2hsaWdodE1vdmUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodGVkLW1vdmVcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5jb29yZGluYXRlcy5nZXRYKCksXG4gICAgICAgICAgeSA9IHRoaXMuY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIGJsYWNrID0gKCh4ICsgeSkgJSAyKSA9PT0gMDtcblxuICAgIGJsYWNrID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJibGFja1wiKSA6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ3aGl0ZVwiKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRTcXVhcmVEaXZXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTcXVhcmVEaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTcXVhcmVEaXZXaWR0aCxcbiAgICAgIGdldFNxdWFyZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzcXVhcmVEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNxdWFyZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNxdWFyZURpdilgXG5cbiAgd2lkdGg6ICR7c3F1YXJlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7c3F1YXJlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtCcm93bn07XG4gIH1cbiAgXG4gIC53aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtsaWdodEJyb3dufTtcbiAgfVxuICBcbiAgLmhpZ2hsaWdodGVkIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAke2JyaWdodFJlZH07XG4gIH1cbiAgXG4gIC5oaWdobGlnaHRlZC1tb3ZlOjphZnRlciB7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogMjUlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgei1pbmRleDogMTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBvcGFjaXR5OiA3NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21pZEdyZXl9O1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVBLFlBQTBCO0lBRVIsT0FBYztJQUNKLFFBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkVyQyxhQUUzQjtTQUFpQixhQUNoQjtTQUFrQixnRUFJTjtTQUFZLDhDQUlaO1NBQWEsb0RBSWI7U0FBWSw2T0FhWjtTQUFVLFlBR2hDOzs7Ozs7O0lBMUdNLFNBQVMsWUFBUyxRQUFPO2NBQXpCLFNBQVMsRUFQUyxLQUFNO2FBT3hCLFNBQVMsQ0FDRCxRQUFRLEVBQUUsV0FBVzs4QkFEN0IsU0FBUzs7aUVBQVQsU0FBUyxhQUVMLFFBQVE7Y0FFVCxXQUFXLEdBQUcsV0FBVzs7O2lCQUo1QixTQUFTOztZQU9iLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7NEJBQ0EsV0FBVzs7OztZQUd6QixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLFdBQVc7b0JBQ3BCLGtCQUFrQixRQUFRLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVzt1QkFFdEQsa0JBQWtCOzs7O1lBRzNCLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7cUJBQ0YsUUFBUSxFQUFDLFdBQWE7Ozs7WUFHN0IsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSixXQUFXLEVBQUMsV0FBYTs7OztZQUdoQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO3FCQUNOLFFBQVEsRUFBQyxnQkFBa0I7Ozs7WUFHbEMsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZTtxQkFDUixXQUFXLEVBQUMsZ0JBQWtCOzs7O1lBR3JDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ0EsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxJQUFJLElBQ3pCLENBQUMsUUFBUSxXQUFXLENBQUMsSUFBSSxJQUN6QixLQUFLLElBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQztnQkFFakMsS0FBSyxRQUNFLFFBQVEsRUFBQyxLQUFPLFVBQ2QsUUFBUSxFQUFDLEtBQU87cUJBRXBCLGdCQUFnQixNQUFNLFdBQVc7Ozs7WUFHeEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs7OztZQUlYLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsaUJBQWlCLFFBQVEsUUFBUSxDQUFDLElBQUksUUFDdEMsa0JBQWtCLFFBQVEsU0FBUyxDQUFDLElBQUk7O29CQUc1QyxpQkFBaUIsRUFBakIsaUJBQWlCO29CQUNqQixrQkFBa0IsRUFBbEIsa0JBQWtCOzs7Ozs7WUFVZixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7b0JBQ3hCLFdBQVcsR0FBSyxVQUFVLENBQTFCLFdBQVcsRUFDYixTQUFTLEdBMUVLLEtBQU0sU0EwRUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVzt1QkFFM0QsU0FBUzs7OztXQXJFZCxTQUFTO21CQVBTLEtBQU07Z0JBT3hCLFNBQVMsR0EyRE4sT0FBTyxJQUFHLEdBQUs7Z0JBM0RsQixTQUFTLEdBNkROLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7QUFXdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQTlFSCxZQUEwQjtlQUpsQyxjQUFpQixTQW9GZCxTQUFTLHFCQTlFYyxPQUFjLGlCQUFkLE9BQWMsa0JBQ0osUUFBZSxZQUFmLFFBQWUsYUFBZixRQUFlLFlBQWYsUUFBZSJ9