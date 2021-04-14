"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _square = _interopRequireDefault(require("../../div/square"));
var _colours = require("../../../colours");
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  background-color: ",
        ";\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BlackSquareDiv = function(SquareDiv) {
    _inherits(BlackSquareDiv, _square.default);
    function BlackSquareDiv() {
        _classCallCheck(this, BlackSquareDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackSquareDiv).apply(this, arguments));
    }
    return BlackSquareDiv;
}(_square.default);
_defineProperty(BlackSquareDiv, "defaultProperties", {
    className: "black"
});
var _default = _easyWithStyle.default(BlackSquareDiv)(_templateObject(), _colours.darkBrown);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcXVhcmVEaXYgZnJvbSBcIi4uLy4uL2Rpdi9zcXVhcmVcIjtcblxuaW1wb3J0IHsgZGFya0Jyb3duIH0gZnJvbSBcIi4uLy4uLy4uL2NvbG91cnNcIjtcblxuY2xhc3MgQmxhY2tTcXVhcmVEaXYgZXh0ZW5kcyBTcXVhcmVEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJsYWNrXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJsYWNrU3F1YXJlRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtCcm93bn07XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVqQixPQUFrQjtJQUVkLFFBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVFILHdCQUVyQjtTQUFZLFdBRWhDOzs7Ozs7O0lBVk0sY0FBYyxZQUFTLFNBQVM7Y0FBaEMsY0FBYyxFQUpFLE9BQWtCO2FBSWxDLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztXQUFkLGNBQWM7RUFKRSxPQUFrQjtnQkFJbEMsY0FBYyxHQUNYLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7ZUFSQSxjQUFpQixTQVlkLGNBQWMscUJBUmIsUUFBa0IifQ==