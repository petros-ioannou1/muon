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
var KnightDiv = function(PieceDiv) {
    _inherits(KnightDiv, _piece.default);
    function KnightDiv() {
        _classCallCheck(this, KnightDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(KnightDiv).apply(this, arguments));
    }
    return KnightDiv;
}(_piece.default);
_defineProperty(KnightDiv, "directions", [
    {
        x: +1,
        y: +2
    },
    {
        x: +1,
        y: -2
    },
    {
        x: -1,
        y: +2
    },
    {
        x: -1,
        y: -2
    },
    {
        x: +2,
        y: +1
    },
    {
        x: +2,
        y: -1
    },
    {
        x: -2,
        y: +1
    },
    {
        x: -2,
        y: -1
    }
]);
_defineProperty(KnightDiv, "maximumMagnitude", 1);
_defineProperty(KnightDiv, "defaultProperties", {
    className: "knight"
});
exports.default = KnightDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodERpdiBleHRlbmRzIFBpZWNlRGl2IHtcbiAgc3RhdGljIGRpcmVjdGlvbnMgPSBbXG4gICAgeyB4OiArMSwgeTogKzIgfSxcbiAgICB7IHg6ICsxLCB5OiAtMiB9LFxuICAgIHsgeDogLTEsIHk6ICsyIH0sXG4gICAgeyB4OiAtMSwgeTogLTIgfSxcbiAgICB7IHg6ICsyLCB5OiArMSB9LFxuICAgIHsgeDogKzIsIHk6IC0xIH0sXG4gICAgeyB4OiAtMiwgeTogKzEgfSxcbiAgICB7IHg6IC0yLCB5OiAtMSB9XG4gIF07XG5cbiAgc3RhdGljIG1heGltdW1NYWduaXR1ZGUgPSAxO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwia25pZ2h0XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQixTQUFTLFlBQVMsUUFBUTtjQUExQixTQUFTLEVBRlQsTUFBaUI7YUFFakIsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O1dBQVQsU0FBUztFQUZULE1BQWlCO2dCQUVqQixTQUFTLEdBQ3JCLFVBQVU7O1FBQ2IsQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O2dCQVRHLFNBQVMsR0FZckIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFaUixTQUFTLEdBY3JCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7a0JBZkYsU0FBUyJ9