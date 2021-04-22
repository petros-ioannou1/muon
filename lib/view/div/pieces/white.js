"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../../coordinates"));
var _white = _interopRequireDefault(require("../../div/piece/pawn/white"));
var _white1 = _interopRequireDefault(require("../../div/piece/rook/white"));
var _white2 = _interopRequireDefault(require("../../div/piece/king/white"));
var _white3 = _interopRequireDefault(require("../../div/piece/queen/white"));
var _white4 = _interopRequireDefault(require("../../div/piece/bishop/white"));
var _white5 = _interopRequireDefault(require("../../div/piece/knight/white"));
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
var WhitePiecesDiv = function(Element1) {
    _inherits(WhitePiecesDiv, _easy.Element);
    function WhitePiecesDiv() {
        _classCallCheck(this, WhitePiecesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhitePiecesDiv).apply(this, arguments));
    }
    _createClass(WhitePiecesDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var WhitePieceDivs = [
                    _white1.default,
                    _white5.default,
                    _white4.default,
                    _white2.default,
                    _white3.default,
                    _white4.default,
                    _white5.default,
                    _white1.default,
                    _white.default
                ], whitePieceDivs = WhitePieceDivs.map(function(PieceDiv, index) {
                    var x = index, y = 7, coordinates = _coordinates.default.fromXAndY(x, y);
                    return( /*#__PURE__*/ React.createElement(PieceDiv, {
                        coordinates: coordinates
                    }));
                }), childElements1 = whitePieceDivs;
                return childElements1;
            }
        }
    ]);
    return WhitePiecesDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(WhitePiecesDiv, "tagName", "div");
_defineProperty(WhitePiecesDiv, "defaultProperties", {
    className: "white-pieces"
});
var _default = _easyWithStyle.default(WhitePiecesDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZXMvd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgV2hpdGVQYXduUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9wYXduL3doaXRlXCI7XG5pbXBvcnQgV2hpdGVSb29rUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9yb29rL3doaXRlXCI7XG5pbXBvcnQgV2hpdGVLaW5nUGllY2VEaXYgZnJvbSBcIi4uLy4uL2Rpdi9waWVjZS9raW5nL3doaXRlXCI7XG5pbXBvcnQgV2hpdGVRdWVlblBpZWNlRGl2IGZyb20gXCIuLi8uLi9kaXYvcGllY2UvcXVlZW4vd2hpdGVcIjtcbmltcG9ydCBXaGl0ZUJpc2hvcFBpZWNlRGl2IGZyb20gXCIuLi8uLi9kaXYvcGllY2UvYmlzaG9wL3doaXRlXCI7XG5pbXBvcnQgV2hpdGVLbmlnaHRQaWVjZURpdiBmcm9tIFwiLi4vLi4vZGl2L3BpZWNlL2tuaWdodC93aGl0ZVwiO1xuXG5jbGFzcyBXaGl0ZVBpZWNlc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFdoaXRlUGllY2VEaXZzID0gW1xuICAgICAgICAgICAgV2hpdGVSb29rUGllY2VEaXYsXG4gICAgICAgICAgICBXaGl0ZUtuaWdodFBpZWNlRGl2LFxuICAgICAgICAgICAgV2hpdGVCaXNob3BQaWVjZURpdixcbiAgICAgICAgICAgIFdoaXRlS2luZ1BpZWNlRGl2LFxuICAgICAgICAgICAgV2hpdGVRdWVlblBpZWNlRGl2LFxuICAgICAgICAgICAgV2hpdGVCaXNob3BQaWVjZURpdixcbiAgICAgICAgICAgIFdoaXRlS25pZ2h0UGllY2VEaXYsXG4gICAgICAgICAgICBXaGl0ZVJvb2tQaWVjZURpdixcbiAgICAgICAgICAgIFdoaXRlUGF3blBpZWNlRGl2XG4gICAgICAgICAgXSxcbiAgICAgICAgICB3aGl0ZVBpZWNlRGl2cyA9IFdoaXRlUGllY2VEaXZzLm1hcCgoUGllY2VEaXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgIHkgPSA3LCAgLy8vXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8UGllY2VEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHdoaXRlUGllY2VEaXZzO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ3aGl0ZS1waWVjZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoV2hpdGVQaWVjZXNEaXYpYFxuICBcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRU4sWUFBc0I7SUFDaEIsTUFBNEI7SUFDNUIsT0FBNEI7SUFDNUIsT0FBNEI7SUFDM0IsT0FBNkI7SUFDNUIsT0FBOEI7SUFDOUIsT0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBc0NyQixvREFLekM7Ozs7Ozs7SUF6Q00sY0FBYyxZQUFTLFFBQU87Y0FBOUIsY0FBYyxFQVZJLEtBQU07YUFVeEIsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2xCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsY0FBYztvQkFSTSxPQUE0QjtvQkFJMUIsT0FBOEI7b0JBRDlCLE9BQThCO29CQUZoQyxPQUE0QjtvQkFDM0IsT0FBNkI7b0JBQzVCLE9BQThCO29CQUM5QixPQUE4QjtvQkFKaEMsT0FBNEI7b0JBRDVCLE1BQTRCO21CQW9CaEQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxHQUFHLFVBQUUsUUFBUSxFQUFFLEtBQUs7d0JBQzVDLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLENBQUMsRUFDTCxXQUFXLEdBeEJMLFlBQXNCLFNBd0JGLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs4REFJM0MsUUFBUTt3QkFBQyxXQUFXLEVBQUUsV0FBVzs7b0JBSXRDLGNBQWEsR0FBRyxjQUFjO3VCQUU3QixjQUFhOzs7O1dBMUJsQixjQUFjO21CQVZJLEtBQU07Z0JBVXhCLGNBQWMsR0E2QlgsT0FBTyxJQUFHLEdBQUs7Z0JBN0JsQixjQUFjLEdBK0JYLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsWUFBYzs7ZUE1Q1AsY0FBaUIsU0FnRGQsY0FBYyJ9