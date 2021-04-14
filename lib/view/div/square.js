"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _position = _interopRequireDefault(require("../../mixins/position"));
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
        ";\n  position: absolute;\n  \n  :hover {\n    border: 2px solid ",
        ";\n  }\n      \n"
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
                var _properties = this.properties, coordinates = _properties.coordinates, top = coordinates.getTop(), left = coordinates.getLeft();
                this.setTop(top);
                this.setLeft(left);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        }
    ]);
    return SquareDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SquareDiv, "tagName", "div");
_defineProperty(SquareDiv, "defaultProperties", {
    className: "square"
});
Object.assign(SquareDiv.prototype, _position.default);
var _default = _easyWithStyle.default(SquareDiv)(_templateObject(), _styles.squareDivWidth, _styles.squareDivHeight, _colours.plainRed);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgcG9zaXRpb25NaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9wb3NpdGlvblwiO1xuXG5pbXBvcnQgeyBwbGFpblJlZCB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5pbXBvcnQgeyBzcXVhcmVEaXZXaWR0aCwgc3F1YXJlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBTcXVhcmVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHRvcCA9IGNvb3JkaW5hdGVzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBjb29yZGluYXRlcy5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLnNldFRvcCh0b3ApO1xuICAgIHRoaXMuc2V0TGVmdChsZWZ0KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3F1YXJlXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihTcXVhcmVEaXYucHJvdG90eXBlLCBwb3NpdGlvbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcXVhcmVEaXYpYFxuXG4gIHdpZHRoOiAke3NxdWFyZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3NxdWFyZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtwbGFpblJlZH07XG4gIH1cbiAgICAgIFxuYDtcblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRUgsU0FBdUI7SUFFekIsUUFBZTtJQUNRLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBeUIxQixhQUUzQjtTQUFpQixhQUNoQjtTQUFrQixnRUFJTjtTQUFXLGdCQUdqQzs7Ozs7OztJQWpDTSxTQUFTLFlBQVMsUUFBTztjQUF6QixTQUFTLEVBUFMsS0FBTTthQU94QixTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFDYixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNrQixXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQ2IsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLElBQ3hCLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTztxQkFFM0IsTUFBTSxDQUFDLEdBQUc7cUJBQ1YsT0FBTyxDQUFDLElBQUk7Ozs7WUFHbkIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs7OztXQVZQLFNBQVM7bUJBUFMsS0FBTTtnQkFPeEIsU0FBUyxHQWNOLE9BQU8sSUFBRyxHQUFLO2dCQWRsQixTQUFTLEdBZ0JOLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7QUFJdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQTFCTixTQUF1QjtlQUo1QixjQUFpQixTQWdDZCxTQUFTLHFCQXpCYyxPQUFjLGlCQUFkLE9BQWMsa0JBRHJDLFFBQWUifQ==