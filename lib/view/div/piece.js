"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _draggable = _interopRequireDefault(require("../../mixins/draggable"));
var _coordinates1 = _interopRequireDefault(require("../../mixins/coordinates"));
var _coordinates2 = require("../../utilitites/coordinates");
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
        ";\n  position: absolute;\n  \n  .dragging {\n    z-index: 1;\n    position: fixed;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PieceDiv = function(Element1) {
    _inherits(PieceDiv, _easy.Element);
    function PieceDiv(selector, coordinates) {
        _classCallCheck(this, PieceDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PieceDiv).call(this, selector));
        _this.coordinates = coordinates;
        return _this;
    }
    _createClass(PieceDiv, [
        {
            key: "getCoordinates",
            value: function getCoordinates() {
                return this.coordinates;
            }
        },
        {
            key: "setCoordinates",
            value: function setCoordinates(coordinates) {
                this.coordinates = coordinates;
            }
        },
        {
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates);
                _sufficient.controller.unhighlightSquareDiv();
                _sufficient.controller.highlightSquareDiv(coordinates);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                coordinatesValid ? this.move(coordinates) : this.move(this.coordinates);
                _sufficient.controller.unhighlightSquareDiv();
            }
        },
        {
            key: "move",
            value: function move(coordinates) {
                this.coordinates = coordinates;
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.applyCoordinates(this.coordinates);
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.enableDragging();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDragging();
                this.offStopDrag(this.stopDragHandler, this);
                this.offDrag(this.dragHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, SVG = _constructor.SVG;
                return( /*#__PURE__*/ React.createElement(SVG, null));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var coordinates = properties.coordinates, pieceDiv = _easy.Element.fromClass(Class, properties, coordinates);
                pieceDiv.initialise();
                return pieceDiv;
            }
        }
    ]);
    return PieceDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PieceDiv, "tagName", "div");
_defineProperty(PieceDiv, "defaultProperties", {
    className: "piece"
});
Object.assign(PieceDiv.prototype, _draggable.default);
Object.assign(PieceDiv.prototype, _coordinates1.default);
var _default = _easyWithStyle.default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;
function coordinatesFromTopAndLeft(top, left) {
    var y = _coordinates2.yFromTop(top), x = _coordinates2.xFromLeft(left), coordinates = _coordinates.default.fromXAndY(x, y);
    return coordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IGRyYWdnYWJsZU1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2RyYWdnYWJsZVwiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgeUZyb21Ub3AsIHhGcm9tTGVmdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpdGVzL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgeyBwaWVjZURpdldpZHRoLCBwaWVjZURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgUGllY2VEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGRyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodFNxdWFyZURpdigpO1xuXG4gICAgY29udHJvbGxlci5oaWdobGlnaHRTcXVhcmVEaXYoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgY29vcmRpbmF0ZXNWYWxpZCA/XG4gICAgICB0aGlzLm1vdmUoY29vcmRpbmF0ZXMpIDpcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodFNxdWFyZURpdigpO1xuICB9XG5cbiAgbW92ZShjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZ2dpbmcoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyYWdnaW5nKCk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwaWVjZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGllY2VEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMpO1xuXG4gICAgcGllY2VEaXYuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHBpZWNlRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGllY2VEaXYucHJvdG90eXBlLCBkcmFnZ2FibGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBpZWNlRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG5gO1xuXG5mdW5jdGlvbiBjb29yZGluYXRlc0Zyb21Ub3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICBjb25zdCB5ID0geUZyb21Ub3AodG9wKSxcbiAgICAgICAgeCA9IHhGcm9tTGVmdChsZWZ0KSxcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSk7XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0gsV0FBWTtJQUVmLFlBQW1CO0lBQ2YsVUFBd0I7SUFDdEIsYUFBMEI7SUFFcEIsYUFBOEI7SUFDcEIsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErRnpCLGFBRTFCO1NBQWdCLGFBQ2Y7U0FBaUIsMkZBUTNCOzs7Ozs7O0lBeEdNLFFBQVEsWUFBUyxRQUFPO2NBQXhCLFFBQVEsRUFWVSxLQUFNO2FBVXhCLFFBQVEsQ0FDQSxRQUFRLEVBQUUsV0FBVzs4QkFEN0IsUUFBUTs7aUVBQVIsUUFBUSxhQUVKLFFBQVE7Y0FFVCxXQUFXLEdBQUcsV0FBVzs7O2lCQUo1QixRQUFROztZQU9aLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7NEJBQ0EsV0FBVzs7OztZQUd6QixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLENBQUMsV0FBVztxQkFDbkIsV0FBVyxHQUFHLFdBQVc7Ozs7WUFHaEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtvQkFDdkMsd0JBQXdCLEdBQUcseUJBQXlCLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEdBQ3hGLFdBQVcsUUFBUSxXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QjtnQkExQjFDLFdBQVksWUE0QnhCLG9CQUFvQjtnQkE1QlIsV0FBWSxZQThCeEIsa0JBQWtCLENBQUMsV0FBVzs7OztZQUczQyxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCO29CQUMzQyx3QkFBd0IsR0FBRyx5QkFBeUIsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsR0FDeEYsV0FBVyxRQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQzNELGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxRQUFRO2dCQUU3QyxnQkFBZ0IsUUFDVCxJQUFJLENBQUMsV0FBVyxTQUNkLElBQUksTUFBTSxXQUFXO2dCQXhDUCxXQUFZLFlBMEN4QixvQkFBb0I7Ozs7WUFHakMsR0FBSSxHQUFKLElBQUk7NEJBQUosSUFBSSxDQUFDLFdBQVc7cUJBQ1QsV0FBVyxHQUFHLFdBQVc7cUJBRXpCLGdCQUFnQixNQUFNLFdBQVc7Ozs7WUFHeEMsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtxQkFDRCxnQkFBZ0IsTUFBTSxXQUFXO3FCQUVqQyxNQUFNLE1BQU0sV0FBVztxQkFFdkIsVUFBVSxNQUFNLGVBQWU7cUJBRS9CLGNBQWM7Ozs7WUFHckIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSixlQUFlO3FCQUVmLFdBQVcsTUFBTSxlQUFlO3FCQUVoQyxPQUFPLE1BQU0sV0FBVzs7OztZQUcvQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNLLFlBQWdCLFFBQVgsV0FBVyxFQUF4QixHQUFHLEdBQUssWUFBZ0IsQ0FBeEIsR0FBRzswREFJUixHQUFHOzs7O1lBS1IsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSCxlQUFlOzs7OztZQVNmLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVTtvQkFDeEIsV0FBVyxHQUFLLFVBQVUsQ0FBMUIsV0FBVyxFQUNiLFFBQVEsR0E1Rk0sS0FBTSxTQTRGRCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXO2dCQUVqRSxRQUFRLENBQUMsVUFBVTt1QkFFWixRQUFROzs7O1dBdEZiLFFBQVE7bUJBVlUsS0FBTTtnQkFVeEIsUUFBUSxHQTBFTCxPQUFPLElBQUcsR0FBSztnQkExRWxCLFFBQVEsR0E0RUwsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztBQWF0QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBaEdKLFVBQXdCO0FBaUdwRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBaEdGLGFBQTBCO2VBUGxDLGNBQWlCLFNBeUdkLFFBQVEscUJBL0ZhLE9BQWMsZ0JBQWQsT0FBYzs7U0E0R25ELHlCQUF5QixDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ3BDLENBQUMsR0E5RzJCLGFBQThCLFVBOEc3QyxHQUFHLEdBQ2hCLENBQUMsR0EvRzJCLGFBQThCLFdBK0c1QyxJQUFJLEdBQ2xCLFdBQVcsR0FwSEssWUFBbUIsU0FvSFQsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1dBRXZDLFdBQVcifQ==