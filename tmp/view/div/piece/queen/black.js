"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _queen = _interopRequireDefault(require("../../../div/piece/queen"));
var _black = _interopRequireDefault(require("../../../svg/queen/black"));
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
var BlackQueenPieceDiv = function(QueenPieceDiv) {
    _inherits(BlackQueenPieceDiv, _queen.default);
    function BlackQueenPieceDiv() {
        _classCallCheck(this, BlackQueenPieceDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackQueenPieceDiv).apply(this, arguments));
    }
    return BlackQueenPieceDiv;
}(_queen.default);
_defineProperty(BlackQueenPieceDiv, "SVG", _black.default);
_defineProperty(BlackQueenPieceDiv, "defaultProperties", {
    className: "black"
});
exports.default = BlackQueenPieceDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9xdWVlbi9ibGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFF1ZWVuUGllY2VEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9waWVjZS9xdWVlblwiO1xuaW1wb3J0IEJsYWNrUXVlZW5TVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9xdWVlbi9ibGFja1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWNrUXVlZW5QaWVjZURpdiBleHRlbmRzIFF1ZWVuUGllY2VEaXYge1xuICBzdGF0aWMgU1ZHID0gQmxhY2tRdWVlblNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJsYWNrXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVjLE1BQTBCO0lBQzFCLE1BQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixrQkFBa0IsWUFBUyxhQUFhO2NBQXhDLGtCQUFrQixFQUhiLE1BQTBCO2FBRy9CLGtCQUFrQjs4QkFBbEIsa0JBQWtCO2dFQUFsQixrQkFBa0I7O1dBQWxCLGtCQUFrQjtFQUhiLE1BQTBCO2dCQUcvQixrQkFBa0IsR0FDOUIsR0FBRyxHQUhjLE1BQTBCO2dCQUUvQixrQkFBa0IsR0FHOUIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztrQkFKRCxrQkFBa0IifQ==