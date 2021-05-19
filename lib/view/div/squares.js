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
            key: "highlightMoves",
            value: function highlightMoves(moves) {
                console.log("highlight");
            }
        },
        {
            key: "unhighlightMoves",
            value: function unhighlightMoves() {
                console.log("unhighlight");
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
                var context = this.getContext(), highlightMoves = this.highlightMoves.bind(this), unhighlightMoves = this.unhighlightMoves.bind(this), highlightSquareDiv = this.highlightSquareDiv.bind(this), unhighlightSquareDiv = this.unhighlightSquareDiv.bind(this), parentContext1 = Object.assign({
                }, context, {
                    highlightMoves: highlightMoves,
                    unhighlightMoves: unhighlightMoves,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFNxdWFyZURpdiBmcm9tIFwiLi4vZGl2L3NxdWFyZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBCT0FSRF9TSVpFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBTcXVhcmVzRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFNxdWFyZURpdnMoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5zcXVhcmVcIiksXG4gICAgICAgICAgc3F1YXJlRGl2cyA9IHNxdWFyZURpdkNoaWxkRWxlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzcXVhcmVEaXZzO1xuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIHsgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkU3F1YXJlRGl2O1xuICB9XG5cbiAgc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGZvdW5kU3F1YXJlRGl2ID0gbnVsbDtcblxuICAgIGNvbnN0IHNxdWFyZURpdnMgPSB0aGlzLmdldFNxdWFyZURpdnMoKTtcblxuICAgIHNxdWFyZURpdnMuc29tZSgoc3F1YXJlRGl2KSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmVEaXZNYXRjaGVzQ29vcmRpbmF0ZXMgPSBzcXVhcmVEaXYubWF0Y2hDb29yZGluYXRlcyhjb29yZGluYXRlcyksXG4gICAgICAgICAgICBmb3VuZCA9IHNxdWFyZURpdk1hdGNoZXNDb29yZGluYXRlczsgLy8vXG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZFNxdWFyZURpdiA9IHNxdWFyZURpdjsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcXVhcmVEaXYgPSBmb3VuZFNxdWFyZURpdjsgLy8vXG5cbiAgICByZXR1cm4gc3F1YXJlRGl2O1xuICB9XG5cbiAgaGlnaGxpZ2h0TW92ZXMobW92ZXMpe1xuICAgIGNvbnNvbGUubG9nKFwiaGlnaGxpZ2h0XCIpXG4gIH1cblxuICB1bmhpZ2hsaWdodE1vdmVzKCl7XG4gICAgY29uc29sZS5sb2coXCJ1bmhpZ2hsaWdodFwiKVxuICB9XG5cbiAgaGlnaGxpZ2h0U3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2ID0gdGhpcy5maW5kU3F1YXJlRGl2KGNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChzcXVhcmVEaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodGVkU3F1YXJlRGl2ID0gc3F1YXJlRGl2OyAvLy9cblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYuaGlnaGxpZ2h0KCk7XG5cbiAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoaGlnaGxpZ2h0ZWRTcXVhcmVEaXYpO1xuICAgIH1cbiAgfVxuXG4gIHVuaGlnaGxpZ2h0U3F1YXJlRGl2KCkge1xuICAgIGxldCBoaWdobGlnaHRlZFNxdWFyZURpdiA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKTtcblxuICAgIGlmIChoaWdobGlnaHRlZFNxdWFyZURpdiAhPT0gbnVsbCkge1xuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYudW5oaWdobGlnaHQoKTtcblxuICAgICAgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEhpZ2hsaWdodGVkU3F1YXJlRGl2KGhpZ2hsaWdodGVkU3F1YXJlRGl2KTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KSxcbiAgICAgICAgICAgICAgc3F1YXJlRGl2ID1cblxuICAgICAgICAgICAgICAgIDxTcXVhcmVEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIHNxdWFyZURpdnMucHVzaChzcXVhcmVEaXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBzcXVhcmVEaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgaGlnaGxpZ2h0TW92ZXMgPSB0aGlzLmhpZ2hsaWdodE1vdmVzLmJpbmQodGhpcyksXG4gICAgICAgICAgdW5oaWdobGlnaHRNb3ZlcyA9IHRoaXMudW5oaWdobGlnaHRNb3Zlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhpZ2hsaWdodFNxdWFyZURpdiA9IHRoaXMuaGlnaGxpZ2h0U3F1YXJlRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgdW5oaWdobGlnaHRTcXVhcmVEaXYgPSB0aGlzLnVuaGlnaGxpZ2h0U3F1YXJlRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodE1vdmVzLFxuICAgICAgICAgICAgdW5oaWdobGlnaHRNb3ZlcyxcbiAgICAgICAgICAgIGhpZ2hsaWdodFNxdWFyZURpdixcbiAgICAgICAgICAgIHVuaGlnaGxpZ2h0U3F1YXJlRGl2XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWdobGlnaHRlZFNxdWFyZURpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlc1wiXG4gIH07XG4gIFxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgc3F1YXJlRGl2LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNxdWFyZXNEaXYpYFxuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVIsT0FBZTtJQUNiLFlBQW1CO0lBRWhC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