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
var RookDiv = function(PieceDiv) {
    _inherits(RookDiv, _piece.default);
    function RookDiv() {
        _classCallCheck(this, RookDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(RookDiv).apply(this, arguments));
    }
    return RookDiv;
}(_piece.default);
_defineProperty(RookDiv, "directions", [
    {
        x: +1,
        y: 0
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
    }, 
]);
_defineProperty(RookDiv, "maximumMagnitude", 7);
_defineProperty(RookDiv, "defaultProperties", {
    className: "rook"
});
exports.default = RookDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9yb29rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29rRGl2IGV4dGVuZHMgUGllY2VEaXYge1xuICBzdGF0aWMgZGlyZWN0aW9ucyA9IFtcbiAgICB7IHg6ICsxLCB5OiAwIH0sXG4gICAgeyB4OiArMCwgeTogLTEgfSxcbiAgICB7IHg6IC0xLCB5OiArMCB9LFxuICAgIHsgeDogKzAsIHk6ICsxIH0sXG4gIF07XG5cbiAgc3RhdGljIG1heGltdW1NYWduaXR1ZGUgPSA3O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicm9va1wiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUyxNQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakIsT0FBTyxZQUFTLFFBQVE7Y0FBeEIsT0FBTyxFQUZQLE1BQWlCO2FBRWpCLE9BQU87OEJBQVAsT0FBTztnRUFBUCxPQUFPOztXQUFQLE9BQU87RUFGUCxNQUFpQjtnQkFFakIsT0FBTyxHQUNuQixVQUFVOztRQUNiLENBQUMsR0FBRyxDQUFDO1FBQUUsQ0FBQyxFQUFFLENBQUM7OztRQUNYLENBQUMsR0FBRyxDQUFDO1FBQUUsQ0FBQyxHQUFHLENBQUM7OztRQUNaLENBQUMsR0FBRyxDQUFDO1FBQUUsQ0FBQyxHQUFHLENBQUM7OztRQUNaLENBQUMsR0FBRyxDQUFDO1FBQUUsQ0FBQyxHQUFHLENBQUM7OztnQkFMRyxPQUFPLEdBUW5CLGdCQUFnQixHQUFHLENBQUM7Z0JBUlIsT0FBTyxHQVVuQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2tCQVhBLE9BQU8ifQ==