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
                var _this = this, _loop = function(magnitude) {
                    directions.forEach((function(direction) {
                        var relativeCoordinates = _coordinates.default.fromMagnitudeAndDirection(magnitude, direction), coordinates = _this.coordinates.add(relativeCoordinates), coordinatesValid = coordinates.areValid();
                        if (coordinatesValid) {
                            var pieceDiv = _this, move = _move.default.fromPieceDivAndCoordinates(pieceDiv, coordinates);
                            moves.push(move);
                        }
                    }).bind(_this));
                };
                var moves = [], _constructor = this.constructor, directions = _constructor.directions, maximumMagnitude = _constructor.maximumMagnitude;
                for(var magnitude = 1; magnitude <= maximumMagnitude; magnitude++)_loop(magnitude);
                return moves;
            }
        }
    ]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb3ZlIGZyb20gXCIuLi8uLi8uLi9tb3ZlXCI7XG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi8uLi9jb29yZGluYXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHREaXYgZXh0ZW5kcyBQaWVjZURpdiB7XG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXSxcbiAgICAgICAgICB7IGRpcmVjdGlvbnMsIG1heGltdW1NYWduaXR1ZGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBmb3IgKGxldCBtYWduaXR1ZGUgPSAxOyBtYWduaXR1ZGUgPD0gbWF4aW11bU1hZ25pdHVkZTsgbWFnbml0dWRlKyspIHtcbiAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQ29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tTWFnbml0dWRlQW5kRGlyZWN0aW9uKG1hZ25pdHVkZSwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzVmFsaWQpIHtcbiAgICAgICAgICBjb25zdCBwaWVjZURpdiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgbW92ZSA9IE1vdmUuZnJvbVBpZWNlRGl2QW5kQ29vcmRpbmF0ZXMocGllY2VEaXYsIGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgIG1vdmVzLnB1c2gobW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIHN0YXRpYyBkaXJlY3Rpb25zID0gW1xuICAgIHsgeDogKzEsIHk6ICsyIH0sXG4gICAgeyB4OiArMSwgeTogLTIgfSxcbiAgICB7IHg6IC0xLCB5OiArMiB9LFxuICAgIHsgeDogLTEsIHk6IC0yIH0sXG4gICAgeyB4OiArMiwgeTogKzEgfSxcbiAgICB7IHg6ICsyLCB5OiAtMSB9LFxuICAgIHsgeDogLTIsIHk6ICsxIH0sXG4gICAgeyB4OiAtMiwgeTogLTEgfVxuICBdO1xuXG4gIHN0YXRpYyBtYXhpbXVtTWFnbml0dWRlID0gMTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImtuaWdodFwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFSyxLQUFlO0lBQ1gsTUFBaUI7SUFDZCxZQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QixTQUFTLFlBQVMsUUFBUTtjQUExQixTQUFTLEVBSFQsTUFBaUI7YUFHakIsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBQzVCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7O29CQUtULFVBQVUsQ0FBQyxPQUFPLFdBQUUsU0FBUzs0QkFDckIsbUJBQW1CLEdBVFQsWUFBc0IsU0FTRSx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxHQUNoRixXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQ3RELGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxRQUFROzRCQUV6QyxnQkFBZ0I7Z0NBQ1osUUFBUSxHQUFHLEtBQUksRUFDakIsSUFBSSxHQWpCRCxLQUFlLFNBaUJOLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxXQUFXOzRCQUVoRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7b0JBYmYsS0FBSyxPQUM4QixZQUFnQixRQUFYLFdBQVcsRUFBakQsVUFBVSxHQUF1QixZQUFnQixDQUFqRCxVQUFVLEVBQUUsZ0JBQWdCLEdBQUssWUFBZ0IsQ0FBckMsZ0JBQWdCO3dCQUUzQixTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsSUFBSSxnQkFBZ0IsRUFBRSxTQUFTO3VCQWV6RCxLQUFLOzs7O1dBcEJLLFNBQVM7RUFIVCxNQUFpQjtnQkFHakIsU0FBUyxHQXVCckIsVUFBVTs7UUFDYixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7UUFDWixDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDOzs7Z0JBL0JHLFNBQVMsR0FrQ3JCLGdCQUFnQixHQUFHLENBQUM7Z0JBbENSLFNBQVMsR0FvQ3JCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7a0JBckNGLFNBQVMifQ==