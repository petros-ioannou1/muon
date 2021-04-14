"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _black = _interopRequireDefault(require("../div/square/black"));
var _white = _interopRequireDefault(require("../div/square/white"));
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
        "\n\n  z-index: 0;\n  position: absolute;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SquaresDiv = function(Element1) {
    _inherits(SquaresDiv, _easy.Element);
    function SquaresDiv() {
        _classCallCheck(this, SquaresDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(SquaresDiv).apply(this, arguments));
    }
    _createClass(SquaresDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var squareDivs = [];
                for(var y = 0; y <= 7; y++){
                    for(var x = 0; x <= 7; x++){
                        var black = (x + y) % 2 === 1, coordinates = _coordinates.default.fromXAndY(x, y), SquareDiv = black ? _black.default : _white.default, squareDiv = /*#__PURE__*/ React.createElement(SquareDiv, {
                            coordinates: coordinates
                        });
                        squareDivs.push(squareDiv);
                    }
                }
                var childElements1 = squareDivs; ///
                return childElements1;
            }
        }
    ]);
    return SquaresDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SquaresDiv, "tagName", "div");
_defineProperty(SquaresDiv, "defaultProperties", {
    className: "squares"
});
var _default = _easyWithStyle.default(SquaresDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IEJsYWNrU3F1YXJlRGl2IGZyb20gXCIuLi9kaXYvc3F1YXJlL2JsYWNrXCI7XG5pbXBvcnQgV2hpdGVTcXVhcmVEaXYgZnJvbSBcIi4uL2Rpdi9zcXVhcmUvd2hpdGVcIjtcblxuY2xhc3MgU3F1YXJlc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IDc7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gNzsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGJsYWNrID0gKCh4ICsgeSkgJSAyKSA9PT0gMSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSksXG4gICAgICAgICAgICAgIFNxdWFyZURpdiA9IGJsYWNrID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbGFja1NxdWFyZURpdiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGl0ZVNxdWFyZURpdixcbiAgICAgICAgICAgICAgc3F1YXJlRGl2ID1cblxuICAgICAgICAgICAgICAgIDxTcXVhcmVEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgO1xuXG4gICAgICAgIHNxdWFyZURpdnMucHVzaChzcXVhcmVEaXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBzcXVhcmVEaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcXVhcmVzRGl2KWBcblxuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFTixZQUFtQjtJQUNoQixNQUFxQjtJQUNyQixNQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQ1gsa0RBS3JDOzs7Ozs7O0lBdENNLFVBQVUsWUFBUyxRQUFPO2NBQTFCLFVBQVUsRUFOUSxLQUFNO2FBTXhCLFVBQVU7OEJBQVYsVUFBVTtnRUFBVixVQUFVOztpQkFBVixVQUFVOztZQUNkLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsVUFBVTt3QkFFUCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDakIsS0FBSyxJQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUMsRUFDM0IsV0FBVyxHQVhELFlBQW1CLFNBV0gsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQ3hDLFNBQVMsR0FBRyxLQUFLLEdBWEosTUFBcUIsV0FDckIsTUFBcUIsVUFhbEMsU0FBUyxxQ0FFTixTQUFTOzRCQUFDLFdBQVcsRUFBRSxXQUFXOzt3QkFJM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7b0JBSXZCLGNBQWEsR0FBRyxVQUFVLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUU5QixjQUFhOzs7O1dBdkJsQixVQUFVO21CQU5RLEtBQU07Z0JBTXhCLFVBQVUsR0EwQlAsT0FBTyxJQUFHLEdBQUs7Z0JBMUJsQixVQUFVLEdBNEJQLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsT0FBUzs7ZUFyQ0YsY0FBaUIsU0F5Q2QsVUFBVSJ9