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
var KingDiv = function(PieceDiv) {
    _inherits(KingDiv, _piece.default);
    function KingDiv() {
        _classCallCheck(this, KingDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(KingDiv).apply(this, arguments));
    }
    return KingDiv;
}(_piece.default);
_defineProperty(KingDiv, "directions", [
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
    {
        x: +1,
        y: +0
    },
    {
        x: +0,
        y: -1
    },
    {
        x: -1,
        y: +0
    },
    {
        x: +0,
        y: +1
    }
]);
_defineProperty(KingDiv, "maximumMagnitude", 1);
_defineProperty(KingDiv, "defaultProperties", {
    className: "king"
});
exports.default = KingDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW5nRGl2IGV4dGVuZHMgUGllY2VEaXYge1xuICBzdGF0aWMgZGlyZWN0aW9ucyA9IFtcbiAgICB7IHg6ICsxLCB5OiArMSB9LFxuICAgIHsgeDogKzEsIHk6IC0xIH0sXG4gICAgeyB4OiAtMSwgeTogKzEgfSxcbiAgICB7IHg6IC0xLCB5OiAtMSB9LFxuICAgIHsgeDogKzEsIHk6ICswIH0sXG4gICAgeyB4OiArMCwgeTogLTEgfSxcbiAgICB7IHg6IC0xLCB5OiArMCB9LFxuICAgIHsgeDogKzAsIHk6ICsxIH1cbiAgXTtcblxuICBzdGF0aWMgbWF4aW11bU1hZ25pdHVkZSA9IDE7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJraW5nXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQixPQUFPLFlBQVMsUUFBUTtjQUF4QixPQUFPLEVBRlAsTUFBaUI7YUFFakIsT0FBTzs4QkFBUCxPQUFPO2dFQUFQLE9BQU87O1dBQVAsT0FBTztFQUZQLE1BQWlCO2dCQUVqQixPQUFPLEdBQ25CLFVBQVU7O1FBQ2IsQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O2dCQVRHLE9BQU8sR0FZbkIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFaUixPQUFPLEdBY25CLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7a0JBZkEsT0FBTyJ9