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
        ";\n  }\n  \n  :hover {\n    border: 2px solid ",
        ";\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SquareDiv = function(Element1) {
    _inherits(SquareDiv, _easy.Element);
    function SquareDiv() {
        _classCallCheck(this, SquareDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(SquareDiv).apply(this, arguments));
    }
    _createClass(SquareDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates, x = coordinates.getX(), y = coordinates.getY(), black = (x + y) % 2 === 1;
                black ? this.addClass("black") : this.addClass("white");
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
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
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.darkBrown, _colours.lightBrown, _colours.plainRed);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBwbGFpblJlZCwgZGFya0Jyb3duLCBsaWdodEJyb3duIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcbmltcG9ydCB7IHNxdWFyZURpdldpZHRoLCBzcXVhcmVEaXZIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFNxdWFyZURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeCA9IGNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgICB5ID0gY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIGJsYWNrID0gKCh4ICsgeSkgJSAyKSA9PT0gMTtcblxuICAgIGJsYWNrID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJibGFja1wiKSA6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ3aGl0ZVwiKTtcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNxdWFyZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oU3F1YXJlRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3F1YXJlRGl2KWBcblxuICB3aWR0aDogJHtzcXVhcmVEaXZXaWR0aH07XG4gIGhlaWdodDogJHtzcXVhcmVEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAuYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya0Jyb3dufTtcbiAgfVxuICBcbiAgLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2xpZ2h0QnJvd259O1xuICB9XG4gIFxuICA6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cGxhaW5SZWR9O1xuICB9XG4gICAgICBcbmA7XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVBLFlBQTBCO0lBRVIsUUFBZTtJQUNmLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkIxQixhQUUzQjtTQUFpQixhQUNoQjtTQUFrQixnRUFJTjtTQUFZLDhDQUlaO1NBQWEsOENBSWI7U0FBVyxnQkFHakM7Ozs7Ozs7SUE3Q00sU0FBUyxZQUFTLFFBQU87Y0FBekIsU0FBUyxFQVBTLEtBQU07YUFPeEIsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBQ2IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDa0IsV0FBZSxRQUFWLFVBQVUsRUFBL0IsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUNiLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsS0FBSyxJQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUM7Z0JBRWpDLEtBQUssUUFDRSxRQUFRLEVBQUMsS0FBTyxVQUNkLFFBQVEsRUFBQyxLQUFPO3FCQUVwQixnQkFBZ0IsQ0FBQyxXQUFXOzs7O1lBR25DLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7Ozs7V0FkUCxTQUFTO21CQVBTLEtBQU07Z0JBT3hCLFNBQVMsR0FrQk4sT0FBTyxJQUFHLEdBQUs7Z0JBbEJsQixTQUFTLEdBb0JOLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7QUFJdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQTlCSCxZQUEwQjtlQUpsQyxjQUFpQixTQW9DZCxTQUFTLHFCQTdCYyxPQUFjLGlCQUFkLE9BQWMsa0JBRGQsUUFBZSxZQUFmLFFBQWUsYUFBZixRQUFlIn0=