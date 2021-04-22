"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../../coordinates"));
var _black = _interopRequireDefault(require("../../div/pawn/black"));
var _black1 = _interopRequireDefault(require("../../div/rook/black"));
var _black2 = _interopRequireDefault(require("../../div/king/black"));
var _black3 = _interopRequireDefault(require("../../div/queen/black"));
var _black4 = _interopRequireDefault(require("../../div/bishop/black"));
var _black5 = _interopRequireDefault(require("../../div/knight/black"));
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
        "\n  \n  z-index: 1;\n  position: absolute;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BlackPiecesDiv = function(Element1) {
    _inherits(BlackPiecesDiv, _easy.Element);
    function BlackPiecesDiv() {
        _classCallCheck(this, BlackPiecesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlackPiecesDiv).apply(this, arguments));
    }
    _createClass(BlackPiecesDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var BlackPieces = [
                    _black1.default,
                    _black5.default,
                    _black4.default,
                    _black2.default,
                    _black3.default,
                    _black4.default,
                    _black5.default,
                    _black1.default,
                    _black.default
                ], blackPieces = BlackPieces.map(function(Piece, index) {
                    var x = index, y = 0, coordinates = _coordinates.default.fromXAndY(x, y), piece = /*#__PURE__*/ React.createElement(Piece, {
                        coordinates: coordinates
                    });
                    return piece;
                }), childElements1 = blackPieces;
                return childElements1;
            }
        }
    ]);
    return BlackPiecesDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(BlackPiecesDiv, "tagName", "div");
_defineProperty(BlackPiecesDiv, "defaultProperties", {
    className: "black-pieces"
});
var _default = _easyWithStyle.default(BlackPiecesDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgQmxhY2tQYXduRGl2IGZyb20gXCIuLi8uLi9kaXYvcGF3bi9ibGFja1wiO1xuaW1wb3J0IEJsYWNrUm9va0RpdiBmcm9tIFwiLi4vLi4vZGl2L3Jvb2svYmxhY2tcIjtcbmltcG9ydCBCbGFja0tpbmdEaXYgZnJvbSBcIi4uLy4uL2Rpdi9raW5nL2JsYWNrXCI7XG5pbXBvcnQgQmxhY2tRdWVlbkRpdiBmcm9tIFwiLi4vLi4vZGl2L3F1ZWVuL2JsYWNrXCI7XG5pbXBvcnQgQmxhY2tCaXNob3BEaXYgZnJvbSBcIi4uLy4uL2Rpdi9iaXNob3AvYmxhY2tcIjtcbmltcG9ydCBCbGFja0tuaWdodERpdiBmcm9tIFwiLi4vLi4vZGl2L2tuaWdodC9ibGFja1wiO1xuXG5jbGFzcyBCbGFja1BpZWNlc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IEJsYWNrUGllY2VzID0gW1xuICAgICAgICAgICAgQmxhY2tSb29rRGl2LFxuICAgICAgICAgICAgQmxhY2tLbmlnaHREaXYsXG4gICAgICAgICAgICBCbGFja0Jpc2hvcERpdixcbiAgICAgICAgICAgIEJsYWNrS2luZ0RpdixcbiAgICAgICAgICAgIEJsYWNrUXVlZW5EaXYsXG4gICAgICAgICAgICBCbGFja0Jpc2hvcERpdixcbiAgICAgICAgICAgIEJsYWNrS25pZ2h0RGl2LFxuICAgICAgICAgICAgQmxhY2tSb29rRGl2LFxuICAgICAgICAgICAgQmxhY2tQYXduRGl2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBibGFja1BpZWNlcyA9IEJsYWNrUGllY2VzLm1hcCgoUGllY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgIHkgPSAwLCAgLy8vXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KSxcbiAgICAgICAgICAgICAgICAgIHBpZWNlID1cblxuICAgICAgICAgICAgICAgICAgICA8UGllY2UgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgcmV0dXJuIHBpZWNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBibGFja1BpZWNlcztcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmxhY2stcGllY2VzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJsYWNrUGllY2VzRGl2KWBcbiAgXG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVOLFlBQXNCO0lBQ3JCLE1BQXNCO0lBQ3RCLE9BQXNCO0lBQ3RCLE9BQXNCO0lBQ3JCLE9BQXVCO0lBQ3RCLE9BQXdCO0lBQ3hCLE9BQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVDVixvREFLekM7Ozs7Ozs7SUExQ00sY0FBYyxZQUFTLFFBQU87Y0FBOUIsY0FBYyxFQVZJLEtBQU07YUFVeEIsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2xCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsV0FBVztvQkFSSSxPQUFzQjtvQkFJcEIsT0FBd0I7b0JBRHhCLE9BQXdCO29CQUYxQixPQUFzQjtvQkFDckIsT0FBdUI7b0JBQ3RCLE9BQXdCO29CQUN4QixPQUF3QjtvQkFKMUIsT0FBc0I7b0JBRHRCLE1BQXNCO21CQW9CckMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLFVBQUUsS0FBSyxFQUFFLEtBQUs7d0JBQ25DLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLENBQUMsRUFDTCxXQUFXLEdBeEJMLFlBQXNCLFNBd0JGLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUN4QyxLQUFLLHFDQUVGLEtBQUs7d0JBQUMsV0FBVyxFQUFFLFdBQVc7OzJCQUloQyxLQUFLO29CQUVkLGNBQWEsR0FBRyxXQUFXO3VCQUUxQixjQUFhOzs7O1dBM0JsQixjQUFjO21CQVZJLEtBQU07Z0JBVXhCLGNBQWMsR0E4QlgsT0FBTyxJQUFHLEdBQUs7Z0JBOUJsQixjQUFjLEdBZ0NYLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsWUFBYzs7ZUE3Q1AsY0FBaUIsU0FpRGQsY0FBYyJ9