"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _label = _interopRequireDefault(require("../../div/label"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var RankLabelDiv = function(LabelDiv) {
    _inherits(RankLabelDiv, _label.default);
    function RankLabelDiv() {
        _classCallCheck(this, RankLabelDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(RankLabelDiv).apply(this, arguments));
    }
    _createClass(RankLabelDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates, y = coordinates.getY(), rank = rankFromY(y), html = rank;
                this.html(html);
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        }
    ]);
    return RankLabelDiv;
}(_label.default);
_defineProperty(RankLabelDiv, "defaultProperties", {
    className: "rank"
});
exports.default = RankLabelDiv;
function rankFromY(y) {
    var index = y, ranks = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ], rank = ranks[index];
    return rank;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sYWJlbC9yYW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWxEaXYgZnJvbSBcIi4uLy4uL2Rpdi9sYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rTGFiZWxEaXYgZXh0ZW5kcyBMYWJlbERpdiB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB5ID0gY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIHJhbmsgPSByYW5rRnJvbVkoeSksXG4gICAgICAgICAgaHRtbCA9IHJhbms7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJhbmtcIlxuICB9O1xufVxuXG5mdW5jdGlvbiByYW5rRnJvbVkoeSkge1xuICBjb25zdCBpbmRleCA9IHksICAvLy9cbiAgICAgICAgcmFua3MgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDggXSxcbiAgICAgICAgcmFuayA9IHJhbmtzW2luZGV4XTtcblxuICByZXR1cm4gcmFuaztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVTLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpCLFlBQVksWUFBUyxRQUFRO2NBQTdCLFlBQVksRUFGWixNQUFpQjthQUVqQixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDL0IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDa0IsV0FBZSxRQUFWLFVBQVUsRUFBL0IsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUNiLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FDbEIsSUFBSSxHQUFHLElBQUk7cUJBRVosSUFBSSxDQUFDLElBQUk7cUJBRVQsZ0JBQWdCLENBQUMsV0FBVzs7OztZQUduQyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzs7O1dBWlEsWUFBWTtFQUZaLE1BQWlCO2dCQUVqQixZQUFZLEdBZ0J4QixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2tCQWpCQSxZQUFZO1NBcUJ4QixTQUFTLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRyxDQUFDLEVBQ1QsS0FBSztRQUFLLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztRQUFFLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztRQUFFLENBQUM7UUFBRSxDQUFDO09BQ2hDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSztXQUVqQixJQUFJIn0=