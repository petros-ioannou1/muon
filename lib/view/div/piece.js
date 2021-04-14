"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _king = _interopRequireDefault(require("../svg/black/king"));
var _position = _interopRequireDefault(require("../../mixins/position"));
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
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PieceDiv = function(Element1) {
    _inherits(PieceDiv, _easy.Element);
    function PieceDiv() {
        _classCallCheck(this, PieceDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(PieceDiv).apply(this, arguments));
    }
    _createClass(PieceDiv, [
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
        },
        {
            key: "childElements",
            value: function childElements() {
                return( /*#__PURE__*/ React.createElement(_king.default, null));
            }
        }
    ]);
    return PieceDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PieceDiv, "tagName", "div");
_defineProperty(PieceDiv, "defaultProperties", {
    className: "piece"
});
Object.assign(PieceDiv.prototype, _position.default);
var _default = _easyWithStyle.default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCbGFja0tpbmdTVkcgZnJvbSBcIi4uL3N2Zy9ibGFjay9raW5nXCI7XG5pbXBvcnQgcG9zaXRpb25NaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9wb3NpdGlvblwiO1xuXG5pbXBvcnQgeyBwaWVjZURpdldpZHRoLCBwaWVjZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgUGllY2VEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHRvcCA9IGNvb3JkaW5hdGVzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBjb29yZGluYXRlcy5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLnNldFRvcCh0b3ApO1xuICAgIHRoaXMuc2V0TGVmdChsZWZ0KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8QmxhY2tLaW5nU1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwaWVjZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBwb3NpdGlvbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQaWVjZURpdilgXG5cbiAgd2lkdGg6ICR7cGllY2VEaXZXaWR0aH07XG4gIGhlaWdodDogJHtwaWVjZURpdkhlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRUwsS0FBbUI7SUFDakIsU0FBdUI7SUFFSixPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWlDekIsYUFFMUI7U0FBZ0IsYUFDZjtTQUFpQiw4QkFHM0I7Ozs7Ozs7SUFyQ00sUUFBUSxZQUFTLFFBQU87Y0FBeEIsUUFBUSxFQVBVLEtBQU07YUFPeEIsUUFBUTs4QkFBUixRQUFRO2dFQUFSLFFBQVE7O2lCQUFSLFFBQVE7O1lBQ1osR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDa0IsV0FBZSxRQUFWLFVBQVUsRUFBL0IsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUNiLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxJQUN4QixJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU87cUJBRTNCLE1BQU0sQ0FBQyxHQUFHO3FCQUNWLE9BQU8sQ0FBQyxJQUFJOzs7O1lBR25CLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7Ozs7WUFJWCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhOzBEQW5CVSxLQUFtQjs7OztXQUt0QyxRQUFRO21CQVBVLEtBQU07Z0JBT3hCLFFBQVEsR0FzQkwsT0FBTyxJQUFHLEdBQUs7Z0JBdEJsQixRQUFRLEdBd0JMLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7QUFJdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQWpDTCxTQUF1QjtlQUw1QixjQUFpQixTQXdDZCxRQUFRLHFCQWpDYSxPQUFjLGdCQUFkLE9BQWMifQ==