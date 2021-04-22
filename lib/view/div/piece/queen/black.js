"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _piece = _interopRequireDefault(require("../../../div/piece"));
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
var BlackQueenDiv = function(PieceDiv) {
    _inherits(BlackQueenDiv, _piece.default);
    function BlackQueenDiv() {
        _classCallCheck(this, BlackQueenDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackQueenDiv).apply(this, arguments));
    }
    return BlackQueenDiv;
}(_piece.default);
_defineProperty(BlackQueenDiv, "SVG", _black.default);
_defineProperty(BlackQueenDiv, "defaultProperties", {
    className: "black-queen"
});
exports.default = BlackQueenDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9xdWVlbi9ibGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBpZWNlRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvcGllY2VcIjtcbmltcG9ydCBCbGFja1F1ZWVuU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvcXVlZW4vYmxhY2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFja1F1ZWVuRGl2IGV4dGVuZHMgUGllY2VEaXYge1xuICBzdGF0aWMgU1ZHID0gQmxhY2tRdWVlblNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJsYWNrLXF1ZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQW9CO0lBQ2YsTUFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9CLGFBQWEsWUFBUyxRQUFRO2NBQTlCLGFBQWEsRUFIYixNQUFvQjthQUdwQixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7V0FBYixhQUFhO0VBSGIsTUFBb0I7Z0JBR3BCLGFBQWEsR0FDekIsR0FBRyxHQUhjLE1BQTBCO2dCQUUvQixhQUFhLEdBR3pCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsV0FBYTs7a0JBSlAsYUFBYSJ9