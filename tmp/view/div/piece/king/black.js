"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _king = _interopRequireDefault(require("../../../div/piece/king"));
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
var BlackKingPieceDiv = function(KingPieceDiv) {
    _inherits(BlackKingPieceDiv, _king.default);
    function BlackKingPieceDiv() {
        _classCallCheck(this, BlackKingPieceDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackKingPieceDiv).apply(this, arguments));
    }
    return BlackKingPieceDiv;
}(_king.default);
_defineProperty(BlackKingPieceDiv, "SVG", _black.default);
_defineProperty(BlackKingPieceDiv, "defaultProperties", {
    className: "black"
});
exports.default = BlackKingPieceDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9raW5nL2JsYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2luZ1BpZWNlRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvcGllY2Uva2luZ1wiO1xuaW1wb3J0IEJsYWNrS2luZ1NWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2tpbmcvYmxhY2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFja0tpbmdQaWVjZURpdiBleHRlbmRzIEtpbmdQaWVjZURpdiB7XG4gIHN0YXRpYyBTVkcgPSBCbGFja0tpbmdTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibGFja1wiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYSxLQUF5QjtJQUN6QixNQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsaUJBQWlCLFlBQVMsWUFBWTtjQUF0QyxpQkFBaUIsRUFIYixLQUF5QjthQUc3QixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztXQUFqQixpQkFBaUI7RUFIYixLQUF5QjtnQkFHN0IsaUJBQWlCLEdBQzdCLEdBQUcsR0FIYSxNQUF5QjtnQkFFN0IsaUJBQWlCLEdBRzdCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7a0JBSkQsaUJBQWlCIn0=