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
                var moves = [];
                relativeCoordinatesArray.forEach((function(relativeCoordinates) {
                    var coordinates = this.coordinates.add(relativeCoordinates), coordinatesValid = coordinates.areValid();
                    if (coordinatesValid) {
                        var pieceDiv = this, move = _move.default.fromPieceDivAndCoordinates(pieceDiv, coordinates);
                        moves.push(move);
                    }
                }).bind(this));
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
var relativeCoordinatesArray = [
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
].map(function(json) {
    var x = json.x, y = json.y, relativeCoordinates = _coordinates.default.fromXAndY(x, y);
    return relativeCoordinates;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS9rbmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb3ZlIGZyb20gXCIuLi8uLi8uLi9tb3ZlXCI7XG5pbXBvcnQgUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi8uLi9jb29yZGluYXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHREaXYgZXh0ZW5kcyBQaWVjZURpdiB7XG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgIHJlbGF0aXZlQ29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKChyZWxhdGl2ZUNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMuYWRkKHJlbGF0aXZlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICAgIGlmIChjb29yZGluYXRlc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlRGl2ID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBtb3ZlID0gTW92ZS5mcm9tUGllY2VEaXZBbmRDb29yZGluYXRlcyhwaWVjZURpdiwgY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgIG1vdmVzLnB1c2gobW92ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImtuaWdodFwiXG4gIH07XG59XG5cbmNvbnN0IHJlbGF0aXZlQ29vcmRpbmF0ZXNBcnJheSA9IFtcbiAgeyB4OiArMSwgeTogKzIgfSxcbiAgeyB4OiArMSwgeTogLTIgfSxcbiAgeyB4OiAtMSwgeTogKzIgfSxcbiAgeyB4OiAtMSwgeTogLTIgfSxcbiAgeyB4OiArMiwgeTogKzEgfSxcbiAgeyB4OiArMiwgeTogLTEgfSxcbiAgeyB4OiAtMiwgeTogKzEgfSxcbiAgeyB4OiAtMiwgeTogLTEgfVxuXS5tYXAoKGpzb24pID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBqc29uLFxuICAgICAgICByZWxhdGl2ZUNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpO1xuXG4gIHJldHVybiByZWxhdGl2ZUNvb3JkaW5hdGVzO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFSyxLQUFlO0lBQ1gsTUFBaUI7SUFDZCxZQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QixTQUFTLFlBQVMsUUFBUTtjQUExQixTQUFTLEVBSFQsTUFBaUI7YUFHakIsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBQzVCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsS0FBSztnQkFFWCx3QkFBd0IsQ0FBQyxPQUFPLFdBQUUsbUJBQW1CO3dCQUM3QyxXQUFXLFFBQVEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FDdEQsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFFBQVE7d0JBRXpDLGdCQUFnQjs0QkFDWixRQUFRLFNBQ1IsSUFBSSxHQWRELEtBQWUsU0FjTiwwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsV0FBVzt3QkFFbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7dUJBSVosS0FBSzs7OztXQWhCSyxTQUFTO0VBSFQsTUFBaUI7Z0JBR2pCLFNBQVMsR0FtQnJCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7a0JBcEJGLFNBQVM7SUF3QnhCLHdCQUF3Qjs7UUFDMUIsQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1FBQ1osQ0FBQyxHQUFHLENBQUM7UUFBRSxDQUFDLEdBQUcsQ0FBQzs7RUFDZCxHQUFHLFVBQUUsSUFBSTtRQUNELENBQUMsR0FBUSxJQUFJLENBQWIsQ0FBQyxFQUFFLENBQUMsR0FBSyxJQUFJLENBQVYsQ0FBQyxFQUNOLG1CQUFtQixHQXJDSCxZQUFzQixTQXFDSixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7V0FFL0MsbUJBQW1CIn0=