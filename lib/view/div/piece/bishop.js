"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _piece = _interopRequireDefault(require("../../div/piece"));
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
var BishopDiv = function(PieceDiv) {
    _inherits(BishopDiv, _piece.default);
    function BishopDiv() {
        _classCallCheck(this, BishopDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BishopDiv).apply(this, arguments));
    }
    return BishopDiv;
}(_piece.default);
_defineProperty(BishopDiv, "directions", [
    {
        x: +1,
        y: +1
    },
    {
        x: +1,
        y: -1
    },
    {
        x: -1,
        y: +1
    },
    {
        x: -1,
        y: -1
    }, 
]);
_defineProperty(BishopDiv, "maximumMagnitude", 7);
_defineProperty(BishopDiv, "defaultProperties", {
    className: "bishop"
});
exports.default = BishopDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9iaXNob3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpc2hvcERpdiBleHRlbmRzIFBpZWNlRGl2IHtcbiAgc3RhdGljIGRpcmVjdGlvbnMgPSBbXG4gICAgeyB4OiArMSwgeTogKzEgfSxcbiAgICB7IHg6ICsxLCB5OiAtMSB9LFxuICAgIHsgeDogLTEsIHk6ICsxIH0sXG4gICAgeyB4OiAtMSwgeTogLTEgfSxcbiAgXTtcblxuICBzdGF0aWMgbWF4aW11bU1hZ25pdHVkZSA9IDc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJiaXNob3BcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsTUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpCLFNBQVMsWUFBUyxRQUFRO2NBQTFCLFNBQVMsRUFGVCxNQUFpQjthQUVqQixTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7V0FBVCxTQUFTO0VBRlQsTUFBaUI7Z0JBRWpCLFNBQVMsR0FDckIsVUFBVTs7UUFDYixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7Z0JBTEcsU0FBUyxHQVFyQixnQkFBZ0IsR0FBRyxDQUFDO2dCQVJSLFNBQVMsR0FVckIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFROztrQkFYRixTQUFTIn0=