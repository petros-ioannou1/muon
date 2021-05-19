"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _knight = _interopRequireDefault(require("../../../div/piece/knight"));
var _white = _interopRequireDefault(require("../../../svg/knight/white"));
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
var WhiteKnightDiv = function(KnightDiv) {
    _inherits(WhiteKnightDiv, _knight.default);
    function WhiteKnightDiv() {
        _classCallCheck(this, WhiteKnightDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteKnightDiv).apply(this, arguments));
    }
    return WhiteKnightDiv;
}(_knight.default);
_defineProperty(WhiteKnightDiv, "SVG", _white.default);
_defineProperty(WhiteKnightDiv, "defaultProperties", {
    className: "white"
});
exports.default = WhiteKnightDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQvd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLbmlnaHREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9waWVjZS9rbmlnaHRcIjtcbmltcG9ydCBXaGl0ZUtuaWdodFNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2tuaWdodC93aGl0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoaXRlS25pZ2h0RGl2IGV4dGVuZHMgS25pZ2h0RGl2IHtcbiAgc3RhdGljIFNWRyA9IFdoaXRlS25pZ2h0U1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwid2hpdGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsT0FBMkI7SUFDdEIsTUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGNBQWMsWUFBUyxTQUFTO2NBQWhDLGNBQWMsRUFIYixPQUEyQjthQUc1QixjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7V0FBZCxjQUFjO0VBSGIsT0FBMkI7Z0JBRzVCLGNBQWMsR0FDMUIsR0FBRyxHQUhlLE1BQTJCO2dCQUVqQyxjQUFjLEdBRzFCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7a0JBSkQsY0FBYyJ9