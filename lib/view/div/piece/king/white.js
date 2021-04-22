"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _piece = _interopRequireDefault(require("../../../div/piece"));
var _white = _interopRequireDefault(require("../../../svg/king/white"));
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
var WhiteKingDiv = function(PieceDiv) {
    _inherits(WhiteKingDiv, _piece.default);
    function WhiteKingDiv() {
        _classCallCheck(this, WhiteKingDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteKingDiv).apply(this, arguments));
    }
    return WhiteKingDiv;
}(_piece.default);
_defineProperty(WhiteKingDiv, "SVG", _white.default);
_defineProperty(WhiteKingDiv, "defaultProperties", {
    className: "white-king"
});
exports.default = WhiteKingDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9raW5nL3doaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9waWVjZVwiO1xuaW1wb3J0IFdoaXRlS2luZ1NWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2tpbmcvd2hpdGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZUtpbmdEaXYgZXh0ZW5kcyBQaWVjZURpdiB7XG4gIHN0YXRpYyBTVkcgPSBXaGl0ZUtpbmdTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ3aGl0ZS1raW5nXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQW9CO0lBQ2hCLE1BQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixZQUFZLFlBQVMsUUFBUTtjQUE3QixZQUFZLEVBSFosTUFBb0I7YUFHcEIsWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O1dBQVosWUFBWTtFQUhaLE1BQW9CO2dCQUdwQixZQUFZLEdBQ3hCLEdBQUcsR0FIYSxNQUF5QjtnQkFFN0IsWUFBWSxHQUd4QixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFVBQVk7O2tCQUpOLFlBQVkifQ==