"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _black = _interopRequireDefault(require("../../svg/pawn/black"));
var _coordinates = _interopRequireDefault(require("../../../mixins/coordinates"));
var _styles = require("../../../styles");
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
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BlackPawnDiv = function(Element1) {
    _inherits(BlackPawnDiv, _easy.Element);
    function BlackPawnDiv() {
        _classCallCheck(this, BlackPawnDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackPawnDiv).apply(this, arguments));
    }
    _createClass(BlackPawnDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates;
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return( /*#__PURE__*/ React.createElement(_black.default, null));
            }
        }
    ]);
    return BlackPawnDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(BlackPawnDiv, "tagName", "div");
_defineProperty(BlackPawnDiv, "defaultProperties", {
    className: "black pawn"
});
Object.assign(BlackPawnDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(BlackPawnDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9wYXduL2JsYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEJsYWNrUGF3blNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Bhd24vYmxhY2tcIjtcbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBCbGFja1Bhd25EaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8QmxhY2tQYXduU1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibGFjayBwYXduXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihCbGFja1Bhd25EaXYucHJvdG90eXBlLCBjb29yZGluYXRlc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShCbGFja1Bhd25EaXYpYFxuXG4gIHdpZHRoOiAke3BpZWNlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7cGllY2VEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVMLE1BQXNCO0lBQ2pCLFlBQTZCO0lBRWIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBOEJ4QixhQUU5QjtTQUFnQixhQUNmO1NBQWlCLDhCQUczQjs7Ozs7OztJQWxDTSxZQUFZLFlBQVMsUUFBTztjQUE1QixZQUFZLEVBUE0sS0FBTTthQU94QixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDaEIsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDa0IsV0FBZSxRQUFWLFVBQVUsRUFBL0IsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVztxQkFFZCxnQkFBZ0IsQ0FBQyxXQUFXOzs7O1lBR25DLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7Ozs7WUFJWCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhOzBEQWhCVSxNQUFzQjs7OztXQUt6QyxZQUFZO21CQVBNLEtBQU07Z0JBT3hCLFlBQVksR0FtQlQsT0FBTyxJQUFHLEdBQUs7Z0JBbkJsQixZQUFZLEdBcUJULGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsVUFBWTs7QUFJM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQTlCTixZQUE2QjtlQUxyQyxjQUFpQixTQXFDZCxZQUFZLHFCQTlCUyxPQUFpQixnQkFBakIsT0FBaUIifQ==