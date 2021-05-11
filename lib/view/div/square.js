"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../mixins/coordinates"));
var _colours = require("../../colours");
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
        ";\n  position: absolute;\n  \n  .black {\n    background-color: ",
        ";\n  }\n  \n  .white {\n    background-color: ",
        ";\n  }\n  \n  .highlighted {\n    border: 4px solid red;\n  }\n  \n"
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
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.darkBrown, _colours.lightBrown);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBkYXJrQnJvd24sIGxpZ2h0QnJvd24gfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuaW1wb3J0IHsgc3F1YXJlRGl2V2lkdGgsIHNxdWFyZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgU3F1YXJlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbWF0Y2hDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IG1hdGNoZXNDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMubWF0Y2goY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNDb29yZGluYXRlcztcbiAgfVxuXG4gIGhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cblxuICB1bmhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5jb29yZGluYXRlcy5nZXRYKCksXG4gICAgICAgICAgeSA9IHRoaXMuY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIGJsYWNrID0gKCh4ICsgeSkgJSAyKSA9PT0gMDtcblxuICAgIGJsYWNrID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJibGFja1wiKSA6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ3aGl0ZVwiKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRTcXVhcmVEaXZXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTcXVhcmVEaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTcXVhcmVEaXZXaWR0aCxcbiAgICAgIGdldFNxdWFyZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzcXVhcmVEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNxdWFyZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNxdWFyZURpdilgXG5cbiAgd2lkdGg6ICR7c3F1YXJlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7c3F1YXJlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtCcm93bn07XG4gIH1cbiAgXG4gIC53aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtsaWdodEJyb3dufTtcbiAgfVxuICBcbiAgLmhpZ2hsaWdodGVkIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XG4gIH1cbiAgXG5gO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFQSxZQUEwQjtJQUVsQixRQUFlO0lBQ0wsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxRTFCLGFBRTNCO1NBQWlCLGFBQ2hCO1NBQWtCLGdFQUlOO1NBQVksOENBSVo7U0FBYSxtRUFPbkM7Ozs7Ozs7SUFyRk0sU0FBUyxZQUFTLFFBQU87Y0FBekIsU0FBUyxFQVBTLEtBQU07YUFPeEIsU0FBUyxDQUNELFFBQVEsRUFBRSxXQUFXOzhCQUQ3QixTQUFTOztpRUFBVCxTQUFTLGFBRUwsUUFBUTtjQUVULFdBQVcsR0FBRyxXQUFXOzs7aUJBSjVCLFNBQVM7O1lBT2IsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYzs0QkFDQSxXQUFXOzs7O1lBR3pCLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsV0FBVztvQkFDcEIsa0JBQWtCLFFBQVEsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO3VCQUV0RCxrQkFBa0I7Ozs7WUFHM0IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztxQkFDRixRQUFRLEVBQUMsV0FBYTs7OztZQUc3QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLFdBQVcsRUFBQyxXQUFhOzs7O1lBR2hDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ0EsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxJQUFJLElBQ3pCLENBQUMsUUFBUSxXQUFXLENBQUMsSUFBSSxJQUN6QixLQUFLLElBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQztnQkFFakMsS0FBSyxRQUNFLFFBQVEsRUFBQyxLQUFPLFVBQ2QsUUFBUSxFQUFDLEtBQU87cUJBRXBCLGdCQUFnQixNQUFNLFdBQVc7Ozs7WUFHeEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs7OztZQUlYLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsaUJBQWlCLFFBQVEsUUFBUSxDQUFDLElBQUksUUFDdEMsa0JBQWtCLFFBQVEsU0FBUyxDQUFDLElBQUk7O29CQUc1QyxpQkFBaUIsRUFBakIsaUJBQWlCO29CQUNqQixrQkFBa0IsRUFBbEIsa0JBQWtCOzs7Ozs7WUFVZixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7b0JBQ3hCLFdBQVcsR0FBSyxVQUFVLENBQTFCLFdBQVcsRUFDYixTQUFTLEdBbEVLLEtBQU0sU0FrRUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVzt1QkFFM0QsU0FBUzs7OztXQTdEZCxTQUFTO21CQVBTLEtBQU07Z0JBT3hCLFNBQVMsR0FtRE4sT0FBTyxJQUFHLEdBQUs7Z0JBbkRsQixTQUFTLEdBcUROLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7QUFXdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQXRFSCxZQUEwQjtlQUpsQyxjQUFpQixTQTRFZCxTQUFTLHFCQXJFYyxPQUFjLGlCQUFkLE9BQWMsa0JBRHhCLFFBQWUsWUFBZixRQUFlIn0=