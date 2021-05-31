"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pieces = _interopRequireDefault(require("../../div/pieces"));
var _white = _interopRequireDefault(require("../../div/piece/pawn/white"));
var _white1 = _interopRequireDefault(require("../../div/piece/rook/white"));
var _white2 = _interopRequireDefault(require("../../div/piece/king/white"));
var _white3 = _interopRequireDefault(require("../../div/piece/queen/white"));
var _white4 = _interopRequireDefault(require("../../div/piece/bishop/white"));
var _white5 = _interopRequireDefault(require("../../div/piece/knight/white"));
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
var WhitePiecesDiv = function(PiecesDiv) {
    _inherits(WhitePiecesDiv, _pieces.default);
    function WhitePiecesDiv() {
        _classCallCheck(this, WhitePiecesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhitePiecesDiv).apply(this, arguments));
    }
    return WhitePiecesDiv;
}(_pieces.default);
_defineProperty(WhitePiecesDiv, "MajorPieceDivs", [
    _white1.default,
    _white5.default,
    _white4.default,
    _white2.default,
    _white3.default,
    _white4.default,
    _white5.default,
    _white1.default
]);
_defineProperty(WhitePiecesDiv, "PawnPieceDiv", _white.default);
_defineProperty(WhitePiecesDiv, "orientation", _constants.UP);
_defineProperty(WhitePiecesDiv, "defaultProperties", {
    className: "white"
});
exports.default = WhitePiecesDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMvd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZXNEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZXNcIjtcbmltcG9ydCBXaGl0ZVBhd25QaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL3Bhd24vd2hpdGVcIjtcbmltcG9ydCBXaGl0ZVJvb2tQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL3Jvb2svd2hpdGVcIjtcbmltcG9ydCBXaGl0ZUtpbmdQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL2tpbmcvd2hpdGVcIjtcbmltcG9ydCBXaGl0ZVF1ZWVuUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9xdWVlbi93aGl0ZVwiO1xuaW1wb3J0IFdoaXRlQmlzaG9wUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9iaXNob3Avd2hpdGVcIjtcbmltcG9ydCBXaGl0ZUtuaWdodFBpZWNlRGl2IGZyb20gXCIuLi8uLi9kaXYvcGllY2Uva25pZ2h0L3doaXRlXCI7XG5cbmltcG9ydCB7IFVQIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZVBpZWNlc0RpdiBleHRlbmRzIFBpZWNlc0RpdiB7XG4gIHN0YXRpYyBNYWpvclBpZWNlRGl2cyA9IFtcbiAgICBXaGl0ZVJvb2tQaWVjZURpdixcbiAgICBXaGl0ZUtuaWdodFBpZWNlRGl2LFxuICAgIFdoaXRlQmlzaG9wUGllY2VEaXYsXG4gICAgV2hpdGVLaW5nUGllY2VEaXYsXG4gICAgV2hpdGVRdWVlblBpZWNlRGl2LFxuICAgIFdoaXRlQmlzaG9wUGllY2VEaXYsXG4gICAgV2hpdGVLbmlnaHRQaWVjZURpdixcbiAgICBXaGl0ZVJvb2tQaWVjZURpdlxuICBdO1xuXG4gIHN0YXRpYyBQYXduUGllY2VEaXYgPSBXaGl0ZVBhd25QaWVjZURpdjtcblxuICBzdGF0aWMgb3JpZW50YXRpb24gPSBVUDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIndoaXRlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLE9BQWtCO0lBQ1YsTUFBNEI7SUFDNUIsT0FBNEI7SUFDNUIsT0FBNEI7SUFDM0IsT0FBNkI7SUFDNUIsT0FBOEI7SUFDOUIsT0FBOEI7SUFFM0MsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxCLGNBQWMsWUFBUyxTQUFTO2NBQWhDLGNBQWMsRUFWYixPQUFrQjthQVVuQixjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7V0FBZCxjQUFjO0VBVmIsT0FBa0I7Z0JBVW5CLGNBQWMsR0FDMUIsY0FBYztJQVRPLE9BQTRCO0lBSTFCLE9BQThCO0lBRDlCLE9BQThCO0lBRmhDLE9BQTRCO0lBQzNCLE9BQTZCO0lBQzVCLE9BQThCO0lBQzlCLE9BQThCO0lBSmhDLE9BQTRCOztnQkFRckMsY0FBYyxHQVkxQixZQUFZLEdBckJTLE1BQTRCO2dCQVNyQyxjQUFjLEdBYzFCLFdBQVcsR0FoQkQsVUFBb0I7Z0JBRWxCLGNBQWMsR0FnQjFCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7a0JBakJELGNBQWMifQ==