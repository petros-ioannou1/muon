"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../mixins/coordinates"));
var _colours = require("../../colours");
var _styles = require("../../styles");
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
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  position: absolute;\n  \n  .black {\n    background-color: ",
        ";\n  }\n  \n  .white {\n    background-color: ",
        ";\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SquareDiv = function(Element1) {
    _inherits(SquareDiv, _easy.Element);
    function SquareDiv() {
        _classCallCheck(this, SquareDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(SquareDiv).apply(this, arguments));
    }
    _createClass(SquareDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates, x = coordinates.getX(), y = coordinates.getY(), black = (x + y) % 2 === 0;
                black ? this.addClass("black") : this.addClass("white");
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getSquareDivWidth = this.getWidth.bind(this), getSquareDivHeight = this.getHeight.bind(this);
                return {
                    getSquareDivWidth: getSquareDivWidth,
                    getSquareDivHeight: getSquareDivHeight
                };
            }
        }
    ]);
    return SquareDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SquareDiv, "tagName", "div");
_defineProperty(SquareDiv, "defaultProperties", {
    className: "square"
});
Object.assign(SquareDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.darkBrown, _colours.lightBrown);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBkYXJrQnJvd24sIGxpZ2h0QnJvd24gfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuaW1wb3J0IHsgc3F1YXJlRGl2V2lkdGgsIHNxdWFyZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgU3F1YXJlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB4ID0gY29vcmRpbmF0ZXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSBjb29yZGluYXRlcy5nZXRZKCksXG4gICAgICAgICAgYmxhY2sgPSAoKHggKyB5KSAlIDIpID09PSAwO1xuXG4gICAgYmxhY2sgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImJsYWNrXCIpIDpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcIndoaXRlXCIpO1xuXG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRTcXVhcmVEaXZXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTcXVhcmVEaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTcXVhcmVEaXZXaWR0aCxcbiAgICAgIGdldFNxdWFyZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihTcXVhcmVEaXYucHJvdG90eXBlLCBjb29yZGluYXRlc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcXVhcmVEaXYpYFxuXG4gIHdpZHRoOiAke3NxdWFyZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3NxdWFyZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIC5ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrQnJvd259O1xuICB9XG4gIFxuICAud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7bGlnaHRCcm93bn07XG4gIH1cbiAgXG5gO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFQSxZQUEwQjtJQUVsQixRQUFlO0lBQ0wsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1QzFCLGFBRTNCO1NBQWlCLGFBQ2hCO1NBQWtCLGdFQUlOO1NBQVksOENBSVo7U0FBYSxZQUduQzs7Ozs7OztJQW5ETSxTQUFTLFlBQVMsUUFBTztjQUF6QixTQUFTLEVBUFMsS0FBTTthQU94QixTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFDYixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNrQixXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQ2IsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLElBQ3BCLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixLQUFLLElBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQztnQkFFakMsS0FBSyxRQUNFLFFBQVEsRUFBQyxLQUFPLFVBQ2QsUUFBUSxFQUFDLEtBQU87cUJBRXBCLGdCQUFnQixDQUFDLFdBQVc7Ozs7WUFHbkMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs7OztZQUlYLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsaUJBQWlCLFFBQVEsUUFBUSxDQUFDLElBQUksUUFDdEMsa0JBQWtCLFFBQVEsU0FBUyxDQUFDLElBQUk7O29CQUc1QyxpQkFBaUIsRUFBakIsaUJBQWlCO29CQUNqQixrQkFBa0IsRUFBbEIsa0JBQWtCOzs7OztXQXhCbEIsU0FBUzttQkFQUyxLQUFNO2dCQU94QixTQUFTLEdBNEJOLE9BQU8sSUFBRyxHQUFLO2dCQTVCbEIsU0FBUyxHQThCTixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O0FBSXZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUF4Q0gsWUFBMEI7ZUFKbEMsY0FBaUIsU0E4Q2QsU0FBUyxxQkF2Q2MsT0FBYyxpQkFBZCxPQUFjLGtCQUR4QixRQUFlLFlBQWYsUUFBZSJ9