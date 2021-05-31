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
var QueenDiv = function(PieceDiv) {
    _inherits(QueenDiv, _piece.default);
    function QueenDiv() {
        _classCallCheck(this, QueenDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(QueenDiv).apply(this, arguments));
    }
    return QueenDiv;
}(_piece.default);
_defineProperty(QueenDiv, "directions", [
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
_defineProperty(QueenDiv, "maximumMagnitude", 7);
_defineProperty(QueenDiv, "defaultProperties", {
    className: "queen"
});
exports.default = QueenDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9xdWVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBpZWNlRGl2IGZyb20gXCIuLi8uLi9kaXYvcGllY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlZW5EaXYgZXh0ZW5kcyBQaWVjZURpdiB7XG4gIHN0YXRpYyBkaXJlY3Rpb25zID0gW1xuICAgIHsgeDogKzEsIHk6ICsxIH0sXG4gICAgeyB4OiArMSwgeTogLTEgfSxcbiAgICB7IHg6IC0xLCB5OiArMSB9LFxuICAgIHsgeDogLTEsIHk6IC0xIH0sXG4gICAgeyB4OiArMSwgeTogKzAgfSxcbiAgICB7IHg6ICswLCB5OiAtMSB9LFxuICAgIHsgeDogLTEsIHk6ICswIH0sXG4gICAgeyB4OiArMCwgeTogKzEgfVxuICBdO1xuXG4gIHN0YXRpYyBtYXhpbXVtTWFnbml0dWRlID0gNztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInF1ZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQixRQUFRLFlBQVMsUUFBUTtjQUF6QixRQUFRLEVBRlIsTUFBaUI7YUFFakIsUUFBUTs4QkFBUixRQUFRO2dFQUFSLFFBQVE7O1dBQVIsUUFBUTtFQUZSLE1BQWlCO2dCQUVqQixRQUFRLEdBQ3BCLFVBQVU7O1FBQ2IsQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O2dCQVRHLFFBQVEsR0FZcEIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFaUixRQUFRLEdBY3BCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7a0JBZkQsUUFBUSJ9