"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _square = _interopRequireDefault(require("../../div/square"));
var _colours = require("../../../colours");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  background-color: ",
        ";\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var WhiteSquareDiv = function(SquareDiv) {
    _inherits(WhiteSquareDiv, _square.default);
    function WhiteSquareDiv() {
        _classCallCheck(this, WhiteSquareDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteSquareDiv).apply(this, arguments));
    }
    return WhiteSquareDiv;
}(_square.default);
_defineProperty(WhiteSquareDiv, "defaultProperties", {
    className: "white"
});
var _default = _easyWithStyle.default(WhiteSquareDiv)(_templateObject(), _colours.plainWhite);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUvd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcXVhcmVEaXYgZnJvbSBcIi4uLy4uL2Rpdi9zcXVhcmVcIjtcblxuaW1wb3J0IHsgcGxhaW5XaGl0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb2xvdXJzXCI7XG5cbmNsYXNzIFdoaXRlU3F1YXJlRGl2IGV4dGVuZHMgU3F1YXJlRGl2IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ3aGl0ZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShXaGl0ZVNxdWFyZURpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwbGFpbldoaXRlfTtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWpCLE9BQWtCO0lBRWIsUUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBUUosd0JBRXJCO1NBQWEsV0FFakM7Ozs7Ozs7SUFWTSxjQUFjLFlBQVMsU0FBUztjQUFoQyxjQUFjLEVBSkUsT0FBa0I7YUFJbEMsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O1dBQWQsY0FBYztFQUpFLE9BQWtCO2dCQUlsQyxjQUFjLEdBQ1gsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztlQVJBLGNBQWlCLFNBWWQsY0FBYyxxQkFSWixRQUFrQiJ9