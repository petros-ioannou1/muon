"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _piece = _interopRequireDefault(require("../../../div/piece"));
var _white = _interopRequireDefault(require("../../../svg/bishop/white"));
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
var WhiteBishopDiv = function(PieceDiv) {
    _inherits(WhiteBishopDiv, _piece.default);
    function WhiteBishopDiv() {
        _classCallCheck(this, WhiteBishopDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteBishopDiv).apply(this, arguments));
    }
    return WhiteBishopDiv;
}(_piece.default);
_defineProperty(WhiteBishopDiv, "SVG", _white.default);
_defineProperty(WhiteBishopDiv, "defaultProperties", {
    className: "white-bishop"
});
exports.default = WhiteBishopDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9iaXNob3Avd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L3BpZWNlXCI7XG5pbXBvcnQgV2hpdGVCaXNob3BTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9iaXNob3Avd2hpdGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZUJpc2hvcERpdiBleHRlbmRzIFBpZWNlRGl2IHtcbiAgc3RhdGljIFNWRyA9IFdoaXRlQmlzaG9wU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwid2hpdGUtYmlzaG9wXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQW9CO0lBQ2QsTUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGNBQWMsWUFBUyxRQUFRO2NBQS9CLGNBQWMsRUFIZCxNQUFvQjthQUdwQixjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7V0FBZCxjQUFjO0VBSGQsTUFBb0I7Z0JBR3BCLGNBQWMsR0FDMUIsR0FBRyxHQUhlLE1BQTJCO2dCQUVqQyxjQUFjLEdBRzFCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsWUFBYzs7a0JBSlIsY0FBYyJ9