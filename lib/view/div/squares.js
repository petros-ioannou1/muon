"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _square = _interopRequireDefault(require("../div/square"));
var _coordinates = _interopRequireDefault(require("../../coordinates"));
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
        "\n\n  top: 0;\n  left: 0;\n  z-index: 0;\n  position: absolute;\n      \n"
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
            key: "getSquareDivs",
            value: function getSquareDivs() {
                var squareDivChildElements = this.getChildElements("div.square"), squareDivs = squareDivChildElements; ///
                return squareDivs;
            }
        },
        {
            key: "getHighlightedSquareDiv",
            value: function getHighlightedSquareDiv() {
                var state = this.getState(), highlightedSquareDiv = state.highlightedSquareDiv;
                return highlightedSquareDiv;
            }
        },
        {
            key: "setHighlightedSquareDiv",
            value: function setHighlightedSquareDiv(highlightedSquareDiv) {
                this.updateState({
                    highlightedSquareDiv: highlightedSquareDiv
                });
            }
        },
        {
            key: "findSquareDiv",
            value: function findSquareDiv(coordinates) {
                var foundSquareDiv = null;
                var squareDivs = this.getSquareDivs();
                squareDivs.some(function(squareDiv) {
                    var squareDivMatchesCoordinates = squareDiv.matchCoordinates(coordinates), found = squareDivMatchesCoordinates; ///
                    if (found) {
                        foundSquareDiv = squareDiv; ///
                        return true;
                    }
                });
                var squareDiv = foundSquareDiv; ///
                return squareDiv;
            }
        },
        {
            key: "highlightSquareDiv",
            value: function highlightSquareDiv(coordinates) {
                var squareDiv = this.findSquareDiv(coordinates);
                if (squareDiv !== null) {
                    var highlightedSquareDiv = squareDiv; ///
                    highlightedSquareDiv.highlight();
                    this.setHighlightedSquareDiv(highlightedSquareDiv);
                }
            }
        },
        {
            key: "unhighlightSquareDiv",
            value: function unhighlightSquareDiv() {
                var highlightedSquareDiv = this.getHighlightedSquareDiv();
                if (highlightedSquareDiv !== null) {
                    highlightedSquareDiv.unhighlight();
                    highlightedSquareDiv = null;
                    this.setHighlightedSquareDiv(highlightedSquareDiv);
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var squareDivs = [];
                for(var y = 0; y <= 7; y++){
                    for(var x = 0; x <= 7; x++){
                        var coordinates = _coordinates.default.fromXAndY(x, y), squareDiv = /*#__PURE__*/ React.createElement(_square.default, {
                            coordinates: coordinates
                        });
                        squareDivs.push(squareDiv);
                    }
                }
                var childElements1 = squareDivs; ///
                return childElements1;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), highlightSquareDiv = this.highlightSquareDiv.bind(this), unhighlightSquareDiv = this.unhighlightSquareDiv.bind(this), parentContext1 = Object.assign({
                }, context, {
                    highlightSquareDiv: highlightSquareDiv,
                    unhighlightSquareDiv: unhighlightSquareDiv
                });
                return parentContext1;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var highlightedSquareDiv = null;
                this.setState({
                    highlightedSquareDiv: highlightedSquareDiv
                });
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var squareDiv = _easy.Element.fromClass(Class, properties);
                squareDiv.initialise();
                return squareDiv;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFNxdWFyZURpdiBmcm9tIFwiLi4vZGl2L3NxdWFyZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuXG5jbGFzcyBTcXVhcmVzRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFNxdWFyZURpdnMoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5zcXVhcmVcIiksXG4gICAgICAgICAgc3F1YXJlRGl2cyA9IHNxdWFyZURpdkNoaWxkRWxlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzcXVhcmVEaXZzO1xuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIHsgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkU3F1YXJlRGl2O1xuICB9XG5cbiAgc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGZvdW5kU3F1YXJlRGl2ID0gbnVsbDtcblxuICAgIGNvbnN0IHNxdWFyZURpdnMgPSB0aGlzLmdldFNxdWFyZURpdnMoKTtcblxuICAgIHNxdWFyZURpdnMuc29tZSgoc3F1YXJlRGl2KSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmVEaXZNYXRjaGVzQ29vcmRpbmF0ZXMgPSBzcXVhcmVEaXYubWF0Y2hDb29yZGluYXRlcyhjb29yZGluYXRlcyksXG4gICAgICAgICAgICBmb3VuZCA9IHNxdWFyZURpdk1hdGNoZXNDb29yZGluYXRlczsgLy8vXG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZFNxdWFyZURpdiA9IHNxdWFyZURpdjsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcXVhcmVEaXYgPSBmb3VuZFNxdWFyZURpdjsgLy8vXG5cbiAgICByZXR1cm4gc3F1YXJlRGl2O1xuICB9XG5cbiAgaGlnaGxpZ2h0U3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2ID0gdGhpcy5maW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChzcXVhcmVEaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodGVkU3F1YXJlRGl2ID0gc3F1YXJlRGl2OyAvLy9cblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYuaGlnaGxpZ2h0KCk7XG5cbiAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpO1xuICAgIH1cbiAgfVxuXG4gIHVuaGlnaGxpZ2h0U3F1YXJlRGl2KCkge1xuICAgIGxldCBoaWdobGlnaHRlZFNxdWFyZURpdiA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKTtcblxuICAgIGlmIChoaWdobGlnaHRlZFNxdWFyZURpdiAhPT0gbnVsbCkge1xuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYudW5oaWdobGlnaHQoKTtcblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEhpZ2hsaWdodGVkU3F1YXJlRGl2KGhpZ2hsaWdodGVkU3F1YXJlRGl2KTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IDc7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gNzsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpLFxuICAgICAgICAgICAgICBzcXVhcmVEaXYgPVxuXG4gICAgICAgICAgICAgICAgPFNxdWFyZURpdiBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9Lz5cblxuICAgICAgICA7XG5cbiAgICAgICAgc3F1YXJlRGl2cy5wdXNoKHNxdWFyZURpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHNxdWFyZURpdnM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBoaWdobGlnaHRTcXVhcmVEaXYgPSB0aGlzLmhpZ2hsaWdodFNxdWFyZURpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVuaGlnaGxpZ2h0U3F1YXJlRGl2ID0gdGhpcy51bmhpZ2hsaWdodFNxdWFyZURpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICBoaWdobGlnaHRTcXVhcmVEaXYsXG4gICAgICAgICAgICB1bmhpZ2hsaWdodFNxdWFyZURpdlxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGhpZ2hsaWdodGVkU3F1YXJlRGl2ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNxdWFyZXNcIlxuICB9O1xuICBcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHNxdWFyZURpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHNxdWFyZURpdi5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc3F1YXJlRGl2O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcXVhcmVzRGl2KWBcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVSLE9BQWU7SUFDYixZQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0SE4seUVBT3JDOzs7Ozs7O0lBaklNLFVBQVUsWUFBUyxRQUFPO2NBQTFCLFVBQVUsRUFMUSxLQUFNO2FBS3hCLFVBQVU7OEJBQVYsVUFBVTtnRUFBVixVQUFVOztpQkFBVixVQUFVOztZQUNkLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsc0JBQXNCLFFBQVEsZ0JBQWdCLEVBQUMsVUFBWSxJQUMzRCxVQUFVLEdBQUcsc0JBQXNCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QyxVQUFVOzs7O1lB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