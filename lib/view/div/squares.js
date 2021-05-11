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
                var previousHighlightedSquareDiv = this.getPreviousHighlightedSquareDiv();
                if (previousHighlightedSquareDiv !== null) {
                    previousHighlightedSquareDiv.unhighlight();
                }
                if (squareDiv !== null) {
                    squareDiv.highlight();
                    previousHighlightedSquareDiv = squareDiv; ///
                    this.setPreviousHighlightedSquareDiv(previousHighlightedSquareDiv);
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
                var context = this.getContext(), highlightSquareDiv = this.highlightSquareDiv.bind(this), parentContext1 = Object.assign({
                }, context, {
                    highlightSquareDiv: highlightSquareDiv
                });
                return parentContext1;
            }
        },
        {
            key: "getPreviousHighlightedSquareDiv",
            value: function getPreviousHighlightedSquareDiv() {
                var state = this.getState(), previousHighlightedSquareDiv = state.previousHighlightedSquareDiv;
                return previousHighlightedSquareDiv;
            }
        },
        {
            key: "setPreviousHighlightedSquareDiv",
            value: function setPreviousHighlightedSquareDiv(previousHighlightedSquareDiv) {
                this.updateState({
                    previousHighlightedSquareDiv: previousHighlightedSquareDiv
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var previousHighlightedSquareDiv = null;
                this.setState({
                    previousHighlightedSquareDiv: previousHighlightedSquareDiv
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFNxdWFyZURpdiBmcm9tIFwiLi4vZGl2L3NxdWFyZVwiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuXG5jbGFzcyBTcXVhcmVzRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFNxdWFyZURpdnMoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5zcXVhcmVcIiksXG4gICAgICAgICAgc3F1YXJlRGl2cyA9IHNxdWFyZURpdkNoaWxkRWxlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzcXVhcmVEaXZzO1xuICB9XG5cbiAgZmluZFNxdWFyZURpdihjb29yZGluYXRlcykge1xuICAgIGxldCBmb3VuZFNxdWFyZURpdiA9IG51bGw7XG5cbiAgICBjb25zdCBzcXVhcmVEaXZzID0gdGhpcy5nZXRTcXVhcmVEaXZzKCk7XG5cbiAgICBzcXVhcmVEaXZzLnNvbWUoKHNxdWFyZURpdikgPT4ge1xuICAgICAgY29uc3Qgc3F1YXJlRGl2TWF0Y2hlc0Nvb3JkaW5hdGVzID0gc3F1YXJlRGl2Lm1hdGNoQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpLFxuICAgICAgICAgICAgZm91bmQgPSBzcXVhcmVEaXZNYXRjaGVzQ29vcmRpbmF0ZXM7IC8vL1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZm91bmRTcXVhcmVEaXYgPSBzcXVhcmVEaXY7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3F1YXJlRGl2ID0gZm91bmRTcXVhcmVEaXY7IC8vL1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdjtcbiAgfVxuXG4gIGhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNxdWFyZURpdiA9IHRoaXMuZmluZFNxdWFyZURpdihjb29yZGluYXRlcyk7XG5cbiAgICBsZXQgcHJldmlvdXNIaWdobGlnaHRlZFNxdWFyZURpdiA9IHRoaXMuZ2V0UHJldmlvdXNIaWdobGlnaHRlZFNxdWFyZURpdigpO1xuXG4gICAgaWYgKHByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYgIT09IG51bGwpIHtcbiAgICAgIHByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYudW5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICBpZiAoc3F1YXJlRGl2ICE9PSBudWxsKSB7XG4gICAgICBzcXVhcmVEaXYuaGlnaGxpZ2h0KCk7XG5cbiAgICAgIHByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBzcXVhcmVEaXY7IC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYocHJldmlvdXNIaWdobGlnaHRlZFNxdWFyZURpdik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZzID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA3OyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IDc7IHgrKykge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IENvb3JkaW5hdGVzLmZyb21YQW5kWSh4LCB5KSxcbiAgICAgICAgICAgICAgc3F1YXJlRGl2ID1cblxuICAgICAgICAgICAgICAgIDxTcXVhcmVEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgO1xuXG4gICAgICAgIHNxdWFyZURpdnMucHVzaChzcXVhcmVEaXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBzcXVhcmVEaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgaGlnaGxpZ2h0U3F1YXJlRGl2ID0gdGhpcy5oaWdobGlnaHRTcXVhcmVEaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgaGlnaGxpZ2h0U3F1YXJlRGl2XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGdldFByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0hpZ2hsaWdodGVkU3F1YXJlRGl2IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0hpZ2hsaWdodGVkU3F1YXJlRGl2O1xuICB9XG5cbiAgc2V0UHJldmlvdXNIaWdobGlnaHRlZFNxdWFyZURpdihwcmV2aW91c0hpZ2hsaWdodGVkU3F1YXJlRGl2KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0hpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzSGlnaGxpZ2h0ZWRTcXVhcmVEaXYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0hpZ2hsaWdodGVkU3F1YXJlRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcXVhcmVzXCJcbiAgfTtcbiAgXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzcXVhcmVEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBzcXVhcmVEaXYuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3F1YXJlc0RpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFUixPQUFlO0lBQ2IsWUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBb0hOLHlFQU9yQzs7Ozs7OztJQXpITSxVQUFVLFlBQVMsUUFBTztjQUExQixVQUFVLEVBTFEsS0FBTTthQUt4QixVQUFVOzhCQUFWLFVBQVU7Z0VBQVYsVUFBVTs7aUJBQVYsVUFBVTs7WUFDZCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLHNCQUFzQixRQUFRLGdCQUFnQixFQUFDLFVBQVksSUFDM0QsVUFBVSxHQUFHLHNCQUFzQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEMsVUFBVTs7OztZQUduQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsV0FBVztvQkFDbkIsY0FBYyxHQUFHLElBQUk7b0JBRW5CLFVBQVUsUUFBUSxhQUFhO2dCQUVyQyxVQUFVLENBQUMsSUFBSSxVQUFFLFNBQVM7d0JBQ2xCLDJCQUEyQixHQUFH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