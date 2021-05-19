"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _move = _interopRequireDefault(require("../../../move"));
var _piece = _interopRequireDefault(require("../../div/piece"));
var _coordinates = _interopRequireDefault(require("../../../coordinates"));
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
var KnightDiv = function(PieceDiv) {
    _inherits(KnightDiv, _piece.default);
    function KnightDiv() {
        _classCallCheck(this, KnightDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(KnightDiv).apply(this, arguments));
    }
    _createClass(KnightDiv, [
        {
            key: "generateMoves",
            value: function generateMoves() {
                var x = 1, y = 2, relativeCoordinates = _coordinates.default.fromXAndY(x, y), coordinates = this.coordinates.add(relativeCoordinates), pieceDiv = this, move = _move.default.fromPieceDivAndCoordinates(pieceDiv, coordinates), moves = [
                    move
                ];
                return moves;
            }
        }
    ]);
    return KnightDiv;
}(_piece.default);
_defineProperty(KnightDiv, "defaultProperties", {
    className: "knight"
});
exports.default = KnightDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb3ZlIGZyb20gXCIuLi8uLi8uLi9tb3ZlXCI7XG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi8uLi9jb29yZGluYXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHREaXYgZXh0ZW5kcyBQaWVjZURpdiB7XG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgeCA9IDEsXG4gICAgICAgICAgeSA9IDIsXG4gICAgICAgICAgcmVsYXRpdmVDb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KSxcbiAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHBpZWNlRGl2ID0gdGhpcywgIC8vL1xuICAgICAgICAgIG1vdmUgPSBNb3ZlLmZyb21QaWVjZURpdkFuZENvb3JkaW5hdGVzKHBpZWNlRGl2LCBjb29yZGluYXRlcyksXG4gICAgICAgICAgbW92ZXMgPSBbXG4gICAgICAgICAgICBtb3ZlXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwia25pZ2h0XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVLLEtBQWU7SUFDWCxNQUFpQjtJQUNkLFlBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpCLFNBQVMsWUFBUyxRQUFRO2NBQTFCLFNBQVMsRUFIVCxNQUFpQjthQUdqQixTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFDNUIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsbUJBQW1CLEdBTkwsWUFBc0IsU0FNRixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FDaEQsV0FBVyxRQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQ3RELFFBQVEsU0FDUixJQUFJLEdBWEcsS0FBZSxTQVdWLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxXQUFXLEdBQzVELEtBQUs7b0JBQ0gsSUFBSTs7dUJBR0wsS0FBSzs7OztXQVpLLFNBQVM7RUFIVCxNQUFpQjtnQkFHakIsU0FBUyxHQWVyQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O2tCQWhCRixTQUFTIn0=