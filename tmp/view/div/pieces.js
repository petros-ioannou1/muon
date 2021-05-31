"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _constants = require("../../constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  top: 0;\n  left: 0;\n  position: absolute;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PiecesDiv = function(Element1) {
    _inherits(PiecesDiv, _easy.Element);
    function PiecesDiv() {
        _classCallCheck(this, PiecesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(PiecesDiv).apply(this, arguments));
    }
    _createClass(PiecesDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, MajorPieceDivs = _constructor.MajorPieceDivs, PawnPieceDiv = _constructor.PawnPieceDiv, orientation = _constructor.orientation, pawnPieceDivs = [], majorPieceDivs = [];
                MajorPieceDivs.forEach(function(MajorPieceDiv, index) {
                    var offset = 0, coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation), majorPieceDiv = /*#__PURE__*/ React.createElement(MajorPieceDiv, {
                        coordinates: coordinates
                    });
                    majorPieceDivs.push(majorPieceDiv);
                });
                for(var index = 0; index < _constants.BOARD_SIZE; index++){
                    var offset = 1, coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, orientation), pawnPieceDiv = /*#__PURE__*/ React.createElement(PawnPieceDiv, {
                        coordinates: coordinates
                    });
                    pawnPieceDivs.push(pawnPieceDiv);
                }
                var childElements1 = _toConsumableArray(pawnPieceDivs).concat(_toConsumableArray(majorPieceDivs));
                return childElements1;
            }
        }
    ]);
    return PiecesDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PiecesDiv, "tagName", "div");
_defineProperty(PiecesDiv, "defaultProperties", {
    className: "pieces"
});
var _default = _easyWithStyle.default(PiecesDiv)(_templateObject());
exports.default = _default;
function coordinatesFromIndexOffsetAndDirection(index, offset, orientation) {
    var x = index, y = orientation === _constants.UP ? offset : _constants.BOARD_SIZE - offset - 1, coordinates = _coordinates.default.fromXAndY(x, y);
    return coordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IFVQLCBCT0FSRF9TSVpFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBQaWVjZXNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE1ham9yUGllY2VEaXZzLCBQYXduUGllY2VEaXYsIG9yaWVudGF0aW9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhd25QaWVjZURpdnMgPSBbXSxcbiAgICAgICAgICBtYWpvclBpZWNlRGl2cyA9IFtdO1xuXG4gICAgTWFqb3JQaWVjZURpdnMuZm9yRWFjaCgoTWFqb3JQaWVjZURpdiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDAsXG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzRnJvbUluZGV4T2Zmc2V0QW5kRGlyZWN0aW9uKGluZGV4LCBvZmZzZXQsIG9yaWVudGF0aW9uKSxcbiAgICAgICAgICAgIG1ham9yUGllY2VEaXYgPVxuXG4gICAgICAgICAgICAgIDxNYWpvclBpZWNlRGl2IGNvb3JkaW5hdGVzPXtjb29yZGluYXRlc30gLz5cblxuICAgICAgICAgICAgO1xuXG4gICAgICBtYWpvclBpZWNlRGl2cy5wdXNoKG1ham9yUGllY2VEaXYpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEJPQVJEX1NJWkU7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzRnJvbUluZGV4T2Zmc2V0QW5kRGlyZWN0aW9uKGluZGV4LCBvZmZzZXQsIG9yaWVudGF0aW9uKSxcbiAgICAgICAgICAgIHBhd25QaWVjZURpdiA9XG5cbiAgICAgICAgICAgICAgPFBhd25QaWVjZURpdiBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9IC8+XG5cbiAgICAgICAgICAgIDtcblxuICAgICAgcGF3blBpZWNlRGl2cy5wdXNoKHBhd25QaWVjZURpdik7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgIC4uLnBhd25QaWVjZURpdnMsXG4gICAgICAuLi5tYWpvclBpZWNlRGl2c1xuICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQaWVjZXNEaXYpYFxuICBcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIGNvb3JkaW5hdGVzRnJvbUluZGV4T2Zmc2V0QW5kRGlyZWN0aW9uKGluZGV4LCBvZmZzZXQsIG9yaWVudGF0aW9uKSB7XG4gIGNvbnN0IHggPSBpbmRleCwgIC8vL1xuICAgICAgICB5ID0gKG9yaWVudGF0aW9uID09PSBVUCkgP1xuICAgICAgICAgICAgICBvZmZzZXQgOlxuICAgICAgICAgICAgICAgIChCT0FSRF9TSVpFIC0gb2Zmc2V0IC0gMSksXG4gICAgICAgIGNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpO1xuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVOLFlBQW1CO0lBRVosVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErQ1osNERBTXBDOzs7Ozs7O0lBbkRNLFNBQVMsWUFBUyxRQUFPO2NBQXpCLFNBQVMsRUFOUyxLQUFNO2FBTXhCLFNBQVM7OEJBQVQsU0FBUztnRUFBVCxTQUFTOztpQkFBVCxTQUFTOztZQUNiLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQzJDLFlBQWdCLFFBQVgsV0FBVyxFQUE5RCxjQUFjLEdBQWdDLFlBQWdCLENBQTlELGNBQWMsRUFBRSxZQUFZLEdBQWtCLFlBQWdCLENBQTlDLFlBQVksRUFBRSxXQUFXLEdBQUssWUFBZ0IsQ0FBaEMsV0FBVyxFQUMzQyxhQUFhLE9BQ2IsY0FBYztnQkFFcEIsY0FBYyxDQUFDLE9BQU8sVUFBRSxhQUFhLEVBQUUsS0FBSzt3QkFDcEMsTUFBTSxHQUFHLENBQUMsRUFDVixXQUFXLEdBQUcsc0NBQXNDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEdBQy9FLGFBQWEscUNBRVYsYUFBYTt3QkFBQyxXQUFXLEVBQUUsV0FBVzs7b0JBSS9DLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7d0JBRzFCLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQXBCRSxVQUFpQixhQW9CSixLQUFLO3dCQUNyQyxNQUFNLEdBQUcsQ0FBQyxFQUNWLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsR0FDL0UsWUFBWSxxQ0FFVCxZQUFZO3dCQUFDLFdBQVcsRUFBRSxXQUFXOztvQkFJOUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZOztvQkFHM0IsY0FBYSxzQkFDZCxhQUFhLDRCQUNiLGNBQWM7dUJBR1osY0FBYTs7OztXQW5DbEIsU0FBUzttQkFOUyxLQUFNO2dCQU14QixTQUFTLEdBc0NOLE9BQU8sSUFBRyxHQUFLO2dCQXRDbEIsU0FBUyxHQXdDTixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O2VBakRELGNBQWlCLFNBcURkLFNBQVM7O1NBUXpCLHNDQUFzQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVztRQUNsRSxDQUFDLEdBQUcsS0FBSyxFQUNULENBQUMsR0FBSSxXQUFXLEtBekRPLFVBQWlCLE1BMERsQyxNQUFNLEdBMURXLFVBQWlCLGNBMkRsQixNQUFNLEdBQUcsQ0FBQyxFQUNoQyxXQUFXLEdBOURLLFlBQW1CLFNBOERULFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztXQUV2QyxXQUFXIn0=