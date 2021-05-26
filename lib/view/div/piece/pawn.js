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
var PawnDiv = function(PieceDiv) {
    _inherits(PawnDiv, _piece.default);
    function PawnDiv() {
        _classCallCheck(this, PawnDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(PawnDiv).apply(this, arguments));
    }
    _createClass(PawnDiv, [
        {
            key: "generateMoves",
            value: function generateMoves() {
                var moves = [];
                return moves;
            }
        }
    ]);
    return PawnDiv;
}(_piece.default);
_defineProperty(PawnDiv, "defaultProperties", {
    className: "pawn"
});
exports.default = PawnDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9wYXduLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduRGl2IGV4dGVuZHMgUGllY2VEaXYge1xuICBnZW5lcmF0ZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhd25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsTUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakIsT0FBTyxZQUFTLFFBQVE7Y0FBeEIsT0FBTyxFQUZQLE1BQWlCO2FBRWpCLE9BQU87OEJBQVAsT0FBTztnRUFBUCxPQUFPOztpQkFBUCxPQUFPOztZQUMxQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLEtBQUs7dUJBRUosS0FBSzs7OztXQUpLLE9BQU87RUFGUCxNQUFpQjtnQkFFakIsT0FBTyxHQU9uQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2tCQVJBLE9BQU8ifQ==