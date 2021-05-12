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
                var _constructor = this.constructor, MajorPieceDivs = _constructor.MajorPieceDivs, PawnPieceDiv = _constructor.PawnPieceDiv, direction = _constructor.direction, pawnPieceDivs = [], majorPieceDivs = [];
                MajorPieceDivs.forEach(function(MajorPieceDiv, index) {
                    var offset = 0, coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, direction), majorPieceDiv = /*#__PURE__*/ React.createElement(MajorPieceDiv, {
                        coordinates: coordinates
                    });
                    majorPieceDivs.push(majorPieceDiv);
                });
                for(var index = 0; index < _constants.BOARD_SIZE; index++){
                    var offset = 1, coordinates = coordinatesFromIndexOffsetAndDirection(index, offset, direction), pawnPieceDiv = /*#__PURE__*/ React.createElement(PawnPieceDiv, {
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
function coordinatesFromIndexOffsetAndDirection(index, offset, direction) {
    var x = index, y = direction === _constants.UP ? offset : _constants.BOARD_SIZE - offset - 1, coordinates = _coordinates.default.fromXAndY(x, y);
    return coordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IFVQLCBCT0FSRF9TSVpFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBQaWVjZXNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE1ham9yUGllY2VEaXZzLCBQYXduUGllY2VEaXYsIGRpcmVjdGlvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXduUGllY2VEaXZzID0gW10sXG4gICAgICAgICAgbWFqb3JQaWVjZURpdnMgPSBbXTtcblxuICAgIE1ham9yUGllY2VEaXZzLmZvckVhY2goKE1ham9yUGllY2VEaXYsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSAwLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc0Zyb21JbmRleE9mZnNldEFuZERpcmVjdGlvbihpbmRleCwgb2Zmc2V0LCBkaXJlY3Rpb24pLFxuICAgICAgICAgICAgbWFqb3JQaWVjZURpdiA9XG5cbiAgICAgICAgICAgICAgPE1ham9yUGllY2VEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfSAvPlxuXG4gICAgICAgICAgICA7XG5cbiAgICAgIG1ham9yUGllY2VEaXZzLnB1c2gobWFqb3JQaWVjZURpdik7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQk9BUkRfU0laRTsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tSW5kZXhPZmZzZXRBbmREaXJlY3Rpb24oaW5kZXgsIG9mZnNldCwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgIHBhd25QaWVjZURpdiA9XG5cbiAgICAgICAgICAgICAgPFBhd25QaWVjZURpdiBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9IC8+XG5cbiAgICAgICAgICAgIDtcblxuICAgICAgcGF3blBpZWNlRGl2cy5wdXNoKHBhd25QaWVjZURpdik7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgIC4uLnBhd25QaWVjZURpdnMsXG4gICAgICAuLi5tYWpvclBpZWNlRGl2c1xuICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQaWVjZXNEaXYpYFxuICBcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIGNvb3JkaW5hdGVzRnJvbUluZGV4T2Zmc2V0QW5kRGlyZWN0aW9uKGluZGV4LCBvZmZzZXQsIGRpcmVjdGlvbikge1xuICBjb25zdCB4ID0gaW5kZXgsICAvLy9cbiAgICAgICAgeSA9IChkaXJlY3Rpb24gPT09IFVQKSA/XG4gICAgICAgICAgICAgIG9mZnNldCA6XG4gICAgICAgICAgICAgICAgKEJPQVJEX1NJWkUgLSBvZmZzZXQgLSAxKSxcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSk7XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRU4sWUFBbUI7SUFFWixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQStDWiw0REFNcEM7Ozs7Ozs7SUFuRE0sU0FBUyxZQUFTLFFBQU87Y0FBekIsU0FBUyxFQU5TLEtBQU07YUFNeEIsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBQ2IsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDeUMsWUFBZ0IsUUFBWCxXQUFXLEVBQTVELGNBQWMsR0FBOEIsWUFBZ0IsQ0FBNUQsY0FBYyxFQUFFLFlBQVksR0FBZ0IsWUFBZ0IsQ0FBNUMsWUFBWSxFQUFFLFNBQVMsR0FBSyxZQUFnQixDQUE5QixTQUFTLEVBQ3pDLGFBQWEsT0FDYixjQUFjO2dCQUVwQixjQUFjLENBQUMsT0FBTyxVQUFFLGFBQWEsRUFBRSxLQUFLO3dCQUNwQyxNQUFNLEdBQUcsQ0FBQyxFQUNWLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FDN0UsYUFBYSxxQ0FFVixhQUFhO3dCQUFDLFdBQVcsRUFBRSxXQUFXOztvQkFJL0MsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhOzt3QkFHMUIsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBcEJFLFVBQWlCLGFBb0JKLEtBQUs7d0JBQ3JDLE1BQU0sR0FBRyxDQUFDLEVBQ1YsV0FBVyxHQUFHLHNDQUFzQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUM3RSxZQUFZLHFDQUVULFlBQVk7d0JBQUMsV0FBVyxFQUFFLFdBQVc7O29CQUk5QyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVk7O29CQUczQixjQUFhLHNCQUNkLGFBQWEsNEJBQ2IsY0FBYzt1QkFHWixjQUFhOzs7O1dBbkNsQixTQUFTO21CQU5TLEtBQU07Z0JBTXhCLFNBQVMsR0FzQ04sT0FBTyxJQUFHLEdBQUs7Z0JBdENsQixTQUFTLEdBd0NOLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7ZUFqREQsY0FBaUIsU0FxRGQsU0FBUzs7U0FRekIsc0NBQXNDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTO1FBQ2hFLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFJLFNBQVMsS0F6RFMsVUFBaUIsTUEwRGxDLE1BQU0sR0ExRFcsVUFBaUIsY0EyRGxCLE1BQU0sR0FBRyxDQUFDLEVBQ2hDLFdBQVcsR0E5REssWUFBbUIsU0E4RFQsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1dBRXZDLFdBQVcifQ==