"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../mixins/coordinates"));
var _sizes = require("../../sizes");
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
        "\n\n  color: ",
        ";\n  width: ",
        ";\n  height: ",
        ";\n  display: flex;\n  position: absolute;\n  font-size: ",
        ";\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LabelDiv = function(Element1) {
    _inherits(LabelDiv, _easy.Element);
    function LabelDiv() {
        _classCallCheck(this, LabelDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(LabelDiv).apply(this, arguments));
    }
    return LabelDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(LabelDiv, "tagName", "div");
_defineProperty(LabelDiv, "defaultProperties", {
    className: "label"
});
Object.assign(LabelDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(LabelDiv)(_templateObject(), _colours.plainBlack, _styles.labelDivWidth, _styles.labelDivHeight, _sizes.largeSize);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IGxhcmdlU2l6ZSB9IGZyb20gXCIuLi8uLi9zaXplc1wiO1xuaW1wb3J0IHsgcGxhaW5CbGFjayB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5pbXBvcnQgeyBsYWJlbERpdldpZHRoLCBsYWJlbERpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgTGFiZWxEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGFiZWxcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKExhYmVsRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGFiZWxEaXYpYFxuXG4gIGNvbG9yOiAke3BsYWluQmxhY2t9O1xuICB3aWR0aDogJHtsYWJlbERpdldpZHRofTtcbiAgaGVpZ2h0OiAke2xhYmVsRGl2SGVpZ2h0fTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6ICR7bGFyZ2VTaXplfTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFQSxZQUEwQjtJQUU5QixNQUFhO0lBQ1osUUFBZTtJQUNJLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVl6QixhQUUxQjtTQUFhLFlBQ2I7U0FBZ0IsYUFDZjtTQUFpQix5REFHZDtTQUFZLGlGQUt6Qjs7Ozs7OztJQXRCTSxRQUFRLFlBQVMsUUFBTztjQUF4QixRQUFRLEVBUlUsS0FBTTthQVF4QixRQUFROzhCQUFSLFFBQVE7Z0VBQVIsUUFBUTs7V0FBUixRQUFRO21CQVJVLEtBQU07Z0JBUXhCLFFBQVEsR0FDTCxPQUFPLElBQUcsR0FBSztnQkFEbEIsUUFBUSxHQUdMLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7QUFJdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQWRGLFlBQTBCO2VBSmxDLGNBQWlCLFNBb0JkLFFBQVEscUJBYk4sUUFBZSxhQUNJLE9BQWMsZ0JBQWQsT0FBYyxpQkFGbEMsTUFBYSJ9