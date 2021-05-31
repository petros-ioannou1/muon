"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bishop = _interopRequireDefault(require("../../../div/piece/bishop"));
var _black = _interopRequireDefault(require("../../../svg/bishop/black"));
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
var BlackBishopPieceDiv = function(BishopPieceDiv) {
    _inherits(BlackBishopPieceDiv, _bishop.default);
    function BlackBishopPieceDiv() {
        _classCallCheck(this, BlackBishopPieceDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackBishopPieceDiv).apply(this, arguments));
    }
    return BlackBishopPieceDiv;
}(_bishop.default);
_defineProperty(BlackBishopPieceDiv, "SVG", _black.default);
_defineProperty(BlackBishopPieceDiv, "defaultProperties", {
    className: "black"
});
exports.default = BlackBishopPieceDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9iaXNob3AvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBCaXNob3BQaWVjZURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L3BpZWNlL2Jpc2hvcFwiO1xuaW1wb3J0IEJsYWNrQmlzaG9wU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvYmlzaG9wL2JsYWNrXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tCaXNob3BQaWVjZURpdiBleHRlbmRzIEJpc2hvcFBpZWNlRGl2IHtcbiAgc3RhdGljIFNWRyA9IEJsYWNrQmlzaG9wU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmxhY2tcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWUsT0FBMkI7SUFDM0IsTUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLG1CQUFtQixZQUFTLGNBQWM7Y0FBMUMsbUJBQW1CLEVBSGIsT0FBMkI7YUFHakMsbUJBQW1COzhCQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQjs7V0FBbkIsbUJBQW1CO0VBSGIsT0FBMkI7Z0JBR2pDLG1CQUFtQixHQUMvQixHQUFHLEdBSGUsTUFBMkI7Z0JBRWpDLG1CQUFtQixHQUcvQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLEtBQU87O2tCQUpELG1CQUFtQiJ9