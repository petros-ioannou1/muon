"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _piece = _interopRequireDefault(require("../../../div/piece"));
var _black = _interopRequireDefault(require("../../../svg/king/black"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BlackKingDiv = function(PieceDiv) {
    _inherits(BlackKingDiv, _piece.default);
    function BlackKingDiv() {
        _classCallCheck(this, BlackKingDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackKingDiv).apply(this, arguments));
    }
    return BlackKingDiv;
}(_piece.default);
_defineProperty(BlackKingDiv, "SVG", _black.default);
_defineProperty(BlackKingDiv, "defaultProperties", {
    className: "black-king"
});
exports.default = BlackKingDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L3BpZWNlXCI7XG5pbXBvcnQgQmxhY2tLaW5nU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcva2luZy9ibGFja1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWNrS2luZ0RpdiBleHRlbmRzIFBpZWNlRGl2IHtcbiAgc3RhdGljIFNWRyA9IEJsYWNrS2luZ1NWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJsYWNrLWtpbmdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsTUFBb0I7SUFDaEIsTUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCLFlBQVksWUFBUyxRQUFRO2NBQTdCLFlBQVksRUFIWixNQUFvQjthQUdwQixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7V0FBWixZQUFZO0VBSFosTUFBb0I7Z0JBR3BCLFlBQVksR0FDeEIsR0FBRyxHQUhhLE1BQXlCO2dCQUU3QixZQUFZLEdBR3hCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsVUFBWTs7a0JBSk4sWUFBWSJ9