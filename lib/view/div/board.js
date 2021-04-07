"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _blackJs = _interopRequireDefault(require("../div/square/black.js"));
var _whiteJs = _interopRequireDefault(require("../div/square/white.js"));
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
        "\n\n  position: relative;\n  grid-area: board-div;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BoardDiv = function(Element1) {
    _inherits(BoardDiv, _easy.Element);
    function BoardDiv() {
        _classCallCheck(this, BoardDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(BoardDiv).apply(this, arguments));
    }
    _createClass(BoardDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var squareDivs = [];
                for(var y = 0; y <= 7; y++){
                    for(var x = 0; x <= 7; x++){
                        var black = (x + y) % 2 === 1, position = [
                            x,
                            y
                        ], SquareDiv = black ? _blackJs.default : _whiteJs.default, squareDiv = React.createElement(SquareDiv, {
                            position: position
                        });
                        squareDivs.push(squareDiv);
                    }
                }
                var childElements1 = squareDivs; ///
                return childElements1;
            }
        }
    ]);
    return BoardDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(BoardDiv, "tagName", "div");
_defineProperty(BoardDiv, "defaultProperties", {
    className: "board"
});
var _default = _easyWithStyle.default(BoardDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCbGFja1NxdWFyZURpdiBmcm9tIFwiLi4vZGl2L3NxdWFyZS9ibGFjay5qc1wiO1xuaW1wb3J0IFdoaXRlU3F1YXJlRGl2IGZyb20gXCIuLi9kaXYvc3F1YXJlL3doaXRlLmpzXCI7XG5cbmNsYXNzIEJvYXJkRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPD0gNzsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSA3OyB4KyspIHtcbiAgICAgICAgY29uc3QgYmxhY2sgPSAoKHggKyB5KSAlIDIpID09PSAxLFxuICAgICAgICAgICAgICBwb3NpdGlvbiA9IFsgeCwgeSBdLFxuICAgICAgICAgICAgICBTcXVhcmVEaXYgPSBibGFjayA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxhY2tTcXVhcmVEaXYgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hpdGVTcXVhcmVEaXYsXG4gICAgICAgICAgICAgIHNxdWFyZURpdiA9XG5cbiAgICAgICAgICAgICAgICA8U3F1YXJlRGl2IHBvc2l0aW9uPXtwb3NpdGlvbn0vPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBzcXVhcmVEaXZzLnB1c2goc3F1YXJlRGl2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gc3F1YXJlRGl2czsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJvYXJkXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJvYXJkRGl2KWBcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtYXJlYTogYm9hcmQtZGl2O1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRUgsUUFBd0I7SUFDeEIsUUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUNoQiw0REFLbkM7Ozs7Ozs7SUF0Q00sUUFBUSxZQUFTLFFBQU87Y0FBeEIsUUFBUSxFQUxVLEtBQU07YUFLeEIsUUFBUTs4QkFBUixRQUFRO2dFQUFSLFFBQVE7O2lCQUFSLFFBQVE7O0FBQ1osZUFBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxVQUFVO3dCQUVQLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzRCQUNkLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzRCQUNqQixLQUFLLElBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxFQUMzQixRQUFRO0FBQUssNkJBQUM7QUFBRSw2QkFBQzsyQkFDakIsU0FBUyxHQUFHLEtBQUssR0FYSixRQUF3QixXQUN4QixRQUF3QixVQWFyQyxTQUFTLHVCQUVOLFNBQVM7QUFBQyxvQ0FBUSxFQUFFLFFBQVE7O0FBSXJDLGtDQUFVLENBQUMsSUFBSSxDQUFDLFNBQVM7OztvQkFJdkIsY0FBYSxHQUFHLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRTlCLGNBQWE7Ozs7V0F2QmxCLFFBQVE7bUJBTFUsS0FBTTtnQkFLeEIsUUFBUSxHQTBCTCxPQUFPLElBQUcsR0FBSztnQkExQmxCLFFBQVEsR0E0QkwsaUJBQWlCO0FBQ3RCLGFBQVMsR0FBRSxLQUFPOztlQXBDQSxjQUFpQixTQXdDZCxRQUFRIn0=