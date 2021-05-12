"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _square = _interopRequireDefault(require("../div/square"));
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _constants = require("../../constants");
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
                for(var y = 0; y < _constants.BOARD_SIZE; y++){
                    for(var x = 0; x < _constants.BOARD_SIZE; x++){
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFNxdWFyZURpdiBmcm9tIFwiLi4vZGl2L3NxdWFyZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBCT0FSRF9TSVpFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBTcXVhcmVzRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFNxdWFyZURpdnMoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5zcXVhcmVcIiksXG4gICAgICAgICAgc3F1YXJlRGl2cyA9IHNxdWFyZURpdkNoaWxkRWxlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzcXVhcmVEaXZzO1xuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIHsgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkU3F1YXJlRGl2O1xuICB9XG5cbiAgc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGZvdW5kU3F1YXJlRGl2ID0gbnVsbDtcblxuICAgIGNvbnN0IHNxdWFyZURpdnMgPSB0aGlzLmdldFNxdWFyZURpdnMoKTtcblxuICAgIHNxdWFyZURpdnMuc29tZSgoc3F1YXJlRGl2KSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmVEaXZNYXRjaGVzQ29vcmRpbmF0ZXMgPSBzcXVhcmVEaXYubWF0Y2hDb29yZGluYXRlcyhjb29yZGluYXRlcyksXG4gICAgICAgICAgICBmb3VuZCA9IHNxdWFyZURpdk1hdGNoZXNDb29yZGluYXRlczsgLy8vXG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZFNxdWFyZURpdiA9IHNxdWFyZURpdjsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcXVhcmVEaXYgPSBmb3VuZFNxdWFyZURpdjsgLy8vXG5cbiAgICByZXR1cm4gc3F1YXJlRGl2O1xuICB9XG5cbiAgaGlnaGxpZ2h0U3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2ID0gdGhpcy5maW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChzcXVhcmVEaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodGVkU3F1YXJlRGl2ID0gc3F1YXJlRGl2OyAvLy9cblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYuaGlnaGxpZ2h0KCk7XG5cbiAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpO1xuICAgIH1cbiAgfVxuXG4gIHVuaGlnaGxpZ2h0U3F1YXJlRGl2KCkge1xuICAgIGxldCBoaWdobGlnaHRlZFNxdWFyZURpdiA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKTtcblxuICAgIGlmIChoaWdobGlnaHRlZFNxdWFyZURpdiAhPT0gbnVsbCkge1xuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYudW5oaWdobGlnaHQoKTtcblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEhpZ2hsaWdodGVkU3F1YXJlRGl2KGhpZ2hsaWdodGVkU3F1YXJlRGl2KTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KSxcbiAgICAgICAgICAgICAgc3F1YXJlRGl2ID1cblxuICAgICAgICAgICAgICAgIDxTcXVhcmVEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIHNxdWFyZURpdnMucHVzaChzcXVhcmVEaXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBzcXVhcmVEaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgaGlnaGxpZ2h0U3F1YXJlRGl2ID0gdGhpcy5oaWdobGlnaHRTcXVhcmVEaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICB1bmhpZ2hsaWdodFNxdWFyZURpdiA9IHRoaXMudW5oaWdobGlnaHRTcXVhcmVEaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgaGlnaGxpZ2h0U3F1YXJlRGl2LFxuICAgICAgICAgICAgdW5oaWdobGlnaHRTcXVhcmVEaXZcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBoaWdobGlnaHRlZFNxdWFyZURpdiA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcXVhcmVzXCJcbiAgfTtcbiAgXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzcXVhcmVEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBzcXVhcmVEaXYuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3F1YXJlc0RpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFUixPQUFlO0lBQ2IsWUFBbUI7SUFFaEIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNEhQLHlFQU9yQzs7Ozs7OztJQWpJTSxVQUFVLFlBQVMsUUFBTztjQUExQixVQUFVLEVBUFEsS0FBTTthQU94QixVQUFVOzhCQUFWLFVBQVU7Z0VBQVYsVUFBVTs7aUJBQVYsVUFBVTs7WUFDZCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLHNCQUFzQixRQUFRLGdC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