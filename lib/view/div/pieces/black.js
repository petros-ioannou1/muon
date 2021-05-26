"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pieces = _interopRequireDefault(require("../../div/pieces"));
var _black = _interopRequireDefault(require("../../div/piece/pawn/black"));
var _black1 = _interopRequireDefault(require("../../div/piece/rook/black"));
var _black2 = _interopRequireDefault(require("../../div/piece/king/black"));
var _black3 = _interopRequireDefault(require("../../div/piece/queen/black"));
var _black4 = _interopRequireDefault(require("../../div/piece/bishop/black"));
var _black5 = _interopRequireDefault(require("../../div/piece/knight/black"));
var _constants = require("../../../constants");
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
var BlackPiecesDiv = function(PiecesDiv) {
    _inherits(BlackPiecesDiv, _pieces.default);
    function BlackPiecesDiv() {
        _classCallCheck(this, BlackPiecesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackPiecesDiv).apply(this, arguments));
    }
    return BlackPiecesDiv;
}(_pieces.default);
_defineProperty(BlackPiecesDiv, "PawnPieceDiv", _black.default);
_defineProperty(BlackPiecesDiv, "MajorPieceDivs", [
    _black1.default,
    _black5.default,
    _black4.default,
    _black2.default,
    _black3.default,
    _black4.default,
    _black5.default,
    _black1.default
]);
_defineProperty(BlackPiecesDiv, "orientation", _constants.DOWN);
_defineProperty(BlackPiecesDiv, "defaultProperties", {
    className: "black"
});
exports.default = BlackPiecesDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZXNEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZXNcIjtcbmltcG9ydCBCbGFja1Bhd25QaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL3Bhd24vYmxhY2tcIjtcbmltcG9ydCBCbGFja1Jvb2tQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL3Jvb2svYmxhY2tcIjtcbmltcG9ydCBCbGFja0tpbmdQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL2tpbmcvYmxhY2tcIjtcbmltcG9ydCBCbGFja1F1ZWVuUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9xdWVlbi9ibGFja1wiO1xuaW1wb3J0IEJsYWNrQmlzaG9wUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9iaXNob3AvYmxhY2tcIjtcbmltcG9ydCBCbGFja0tuaWdodFBpZWNlRGl2IGZyb20gXCIuLi8uLi9kaXYvcGllY2Uva25pZ2h0L2JsYWNrXCJcblxuaW1wb3J0IHsgRE9XTiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tQaWVjZXNEaXYgZXh0ZW5kcyBQaWVjZXNEaXYge1xuICBzdGF0aWMgUGF3blBpZWNlRGl2ID0gQmxhY2tQYXduUGllY2VEaXY7XG5cbiAgc3RhdGljIE1ham9yUGllY2VEaXZzID0gW1xuICAgICAgICAgIEJsYWNrUm9va1BpZWNlRGl2LFxuICAgICAgICAgIEJsYWNrS25pZ2h0UGllY2VEaXYsXG4gICAgICAgICAgQmxhY2tCaXNob3BQaWVjZURpdixcbiAgICAgICAgICBCbGFja0tpbmdQaWVjZURpdixcbiAgICAgICAgICBCbGFja1F1ZWVuUGllY2VEaXYsXG4gICAgICAgICAgQmxhY2tCaXNob3BQaWVjZURpdixcbiAgICAgICAgICBCbGFja0tuaWdodFBpZWNlRGl2LFxuICAgICAgICAgIEJsYWNrUm9va1BpZWNlRGl2XG4gICAgICAgIF07XG5cbiAgc3RhdGljIG9yaWVudGF0aW9uID0gRE9XTjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJsYWNrXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLE9BQWtCO0lBQ1YsTUFBNEI7SUFDNUIsT0FBNEI7SUFDNUIsT0FBNEI7SUFDM0IsT0FBNkI7SUFDNUIsT0FBOEI7SUFDOUIsT0FBOEI7SUFFekMsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCLGNBQWMsWUFBUyxTQUFTO2NBQWhDLGNBQWMsRUFWYixPQUFrQjthQVVuQixjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7V0FBZCxjQUFjO0VBVmIsT0FBa0I7Z0JBVW5CLGNBQWMsR0FDMUIsWUFBWSxHQVZTLE1BQTRCO2dCQVNyQyxjQUFjLEdBRzFCLGNBQWM7SUFYTyxPQUE0QjtJQUkxQixPQUE4QjtJQUQ5QixPQUE4QjtJQUZoQyxPQUE0QjtJQUMzQixPQUE2QjtJQUM1QixPQUE4QjtJQUM5QixPQUE4QjtJQUpoQyxPQUE0Qjs7Z0JBUXJDLGNBQWMsR0FjMUIsV0FBVyxHQWhCQyxVQUFvQjtnQkFFcEIsY0FBYyxHQWdCMUIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztrQkFqQkQsY0FBYyJ9