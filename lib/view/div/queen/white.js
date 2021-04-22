"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _white = _interopRequireDefault(require("../../svg/queen/white"));
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
var WhiteQueenDiv = function(Element1) {
    _inherits(WhiteQueenDiv, _easy.Element);
    function WhiteQueenDiv() {
        _classCallCheck(this, WhiteQueenDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhiteQueenDiv).apply(this, arguments));
    }
    _createClass(WhiteQueenDiv, [
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
    return WhiteQueenDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(WhiteQueenDiv, "tagName", "div");
_defineProperty(WhiteQueenDiv, "defaultProperties", {
    className: "white queen"
});
Object.assign(WhiteQueenDiv.prototype, _coordinates.default);
var _default = _easyWithStyle.default(WhiteQueenDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9xdWVlbi93aGl0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBXaGl0ZVF1ZWVuU1ZHIGZyb20gXCIuLi8uLi9zdmcvcXVlZW4vd2hpdGVcIjtcbmltcG9ydCBjb29yZGluYXRlc01peGlucyBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2Nvb3JkaW5hdGVzXCI7XG5cbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBXaGl0ZVF1ZWVuRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFdoaXRlUXVlZW5TVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIndoaXRlIHF1ZWVuXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihXaGl0ZVF1ZWVuRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoV2hpdGVRdWVlbkRpdilgXG5cbiAgd2lkdGg6ICR7cGllY2VEaXZXaWR0aH07XG4gIGhlaWdodDogJHtwaWVjZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRUosTUFBdUI7SUFDbkIsWUFBNkI7SUFFYixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E4QnZCLGFBRS9CO1NBQWdCLGFBQ2Y7U0FBaUIsOEJBRzNCOzs7Ozs7O0lBbENNLGFBQWEsWUFBUyxRQUFPO2NBQTdCLGFBQWEsRUFQSyxLQUFNO2FBT3hCLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNqQixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNrQixXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXO3FCQUVkLGdCQUFnQixDQUFDLFdBQVc7Ozs7WUFHbkMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs7OztZQUlYLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7MERBaEJXLE1BQXVCOzs7O1dBSzNDLGFBQWE7bUJBUEssS0FBTTtnQkFPeEIsYUFBYSxHQW1CVixPQUFPLElBQUcsR0FBSztnQkFuQmxCLGFBQWEsR0FxQlYsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxXQUFhOztBQUk1QixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBOUJQLFlBQTZCO2VBTHJDLGNBQWlCLFNBcUNkLGFBQWEscUJBOUJRLE9BQWlCLGdCQUFqQixPQUFpQiJ9