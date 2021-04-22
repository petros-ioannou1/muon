"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _white = _interopRequireDefault(require("../../svg/bishop/white"));
var _coordinates = _interopRequireDefault(require("../../../mixins/coordinates"));
var _styles = require("../../../styles");
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
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var WhiteBishopDiv = function(Element1) {
    _inherits(WhiteBishopDiv, _easy.Element);
    function WhiteBishopDiv() {
        _classCallCheck(this, WhiteBishopDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteBishopDiv).apply(this, arguments));
    }
    _createClass(WhiteBishopDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates;
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return( /*#__PURE__*/ React.createElement(_white.default, null));
            }
        }
    ]);
    return WhiteBishopDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(WhiteBishopDiv, "tagName", "div");
_defineProperty(WhiteBishopDiv, "defaultProperties", {
    className: "white bishop"
});
Object.assign(WhiteBishopDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(WhiteBishopDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9iaXNob3Avd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgV2hpdGVCaXNob3BTVkcgZnJvbSBcIi4uLy4uL3N2Zy9iaXNob3Avd2hpdGVcIjtcbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBXaGl0ZUJpc2hvcERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxXaGl0ZUJpc2hvcFNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwid2hpdGUgYmlzaG9wXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihXaGl0ZUJpc2hvcERpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFdoaXRlQmlzaG9wRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFSCxNQUF3QjtJQUNyQixZQUE2QjtJQUViLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQThCdEIsYUFFaEM7U0FBZ0IsYUFDZjtTQUFpQiw4QkFHM0I7Ozs7Ozs7SUFsQ00sY0FBYyxZQUFTLFFBQU87Y0FBOUIsY0FBYyxFQVBJLEtBQU07YUFPeEIsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2xCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ2tCLFdBQWUsUUFBVixVQUFVLEVBQS9CLFdBQVcsR0FBSyxXQUFlLENBQS9CLFdBQVc7cUJBRWQsZ0JBQWdCLENBQUMsV0FBVzs7OztZQUduQyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzs7O1lBSVgsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTswREFoQlksTUFBd0I7Ozs7V0FLN0MsY0FBYzttQkFQSSxLQUFNO2dCQU94QixjQUFjLEdBbUJYLE9BQU8sSUFBRyxHQUFLO2dCQW5CbEIsY0FBYyxHQXFCWCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFlBQWM7O0FBSTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsRUE5QlIsWUFBNkI7ZUFMckMsY0FBaUIsU0FxQ2QsY0FBYyxxQkE5Qk8sT0FBaUIsZ0JBQWpCLE9BQWlCIn0=