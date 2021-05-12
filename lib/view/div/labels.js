"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _rank = _interopRequireDefault(require("../div/label/rank"));
var _file = _interopRequireDefault(require("../div/label/file"));
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
        "\n\n  top: 0;\n  left: 0;\n  position: absolute;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LabelsDiv = function(Element1) {
    _inherits(LabelsDiv, _easy.Element);
    function LabelsDiv() {
        _classCallCheck(this, LabelsDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(LabelsDiv).apply(this, arguments));
    }
    _createClass(LabelsDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var labelDivs = [];
                for(var y = 0; y < _constants.BOARD_SIZE; y++){
                    var x = -1, coordinates = _coordinates.default.fromXAndY(x, y), rankLabelDiv = /*#__PURE__*/ React.createElement(_rank.default, {
                        coordinates: coordinates
                    });
                    labelDivs.push(rankLabelDiv);
                }
                for(var x = 0; x < _constants.BOARD_SIZE; x++){
                    var y1 = -1, coordinates = _coordinates.default.fromXAndY(x, y1), fileLabelDiv = /*#__PURE__*/ React.createElement(_file.default, {
                        coordinates: coordinates
                    });
                    labelDivs.push(fileLabelDiv);
                }
                var childElements1 = labelDivs; ///
                return childElements1;
            }
        }
    ]);
    return LabelsDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(LabelsDiv, "tagName", "div");
_defineProperty(LabelsDiv, "defaultProperties", {
    className: "labels"
});
var _default = _easyWithStyle.default(LabelsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sYWJlbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgUmFua0xhYmVsRGl2IGZyb20gXCIuLi9kaXYvbGFiZWwvcmFua1wiO1xuaW1wb3J0IEZpbGVMYWJlbERpdiBmcm9tIFwiLi4vZGl2L2xhYmVsL2ZpbGVcIjtcblxuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTGFiZWxzRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgbGFiZWxEaXZzID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEJPQVJEX1NJWkU7IHkrKykge1xuICAgICAgY29uc3QgeCA9IC0xLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSksXG4gICAgICAgICAgICByYW5rTGFiZWxEaXYgPVxuXG4gICAgICAgICAgICAgIDxSYW5rTGFiZWxEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgIDtcblxuICAgICAgbGFiZWxEaXZzLnB1c2gocmFua0xhYmVsRGl2KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xuICAgICAgY29uc3QgeSA9IC0xLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSksXG4gICAgICAgICAgICBmaWxlTGFiZWxEaXYgPVxuXG4gICAgICAgICAgICAgIDxGaWxlTGFiZWxEaXYgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfS8+XG5cbiAgICAgICAgICAgIDtcblxuICAgICAgbGFiZWxEaXZzLnB1c2goZmlsZUxhYmVsRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gbGFiZWxEaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGFiZWxzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExhYmVsc0RpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFTixZQUFtQjtJQUNsQixLQUFtQjtJQUNuQixLQUFtQjtJQUVqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwQ1IsMERBTXBDOzs7Ozs7O0lBOUNNLFNBQVMsWUFBUyxRQUFPO2NBQXpCLFNBQVMsRUFSUyxLQUFNO2FBUXhCLFNBQVM7OEJBQVQsU0FBUztnRUFBVCxTQUFTOztpQkFBVCxTQUFTOztZQUNiLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsU0FBUzt3QkFFTixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FOTSxVQUFpQixhQU1SLENBQUM7d0JBQ3pCLENBQUMsSUFBSSxDQUFDLEVBQ04sV0FBVyxHQVpDLFlBQW1CLFNBWUwsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQ3hDLFlBQVkscUNBWkMsS0FBbUI7d0JBY2hCLFdBQVcsRUFBRSxXQUFXOztvQkFJOUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZOzt3QkFHcEIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBbEJNLFVBQWlCLGFBa0JSLENBQUM7d0JBQ3pCLEVBQUMsSUFBSSxDQUFDLEVBQ04sV0FBVyxHQXhCQyxZQUFtQixTQXdCTCxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FDeEMsWUFBWSxxQ0F2QkMsS0FBbUI7d0JBeUJoQixXQUFXLEVBQUUsV0FBVzs7b0JBSTlDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWTs7b0JBR3ZCLGNBQWEsR0FBRyxTQUFTLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUU3QixjQUFhOzs7O1dBOUJsQixTQUFTO21CQVJTLEtBQU07Z0JBUXhCLFNBQVMsR0FpQ04sT0FBTyxJQUFHLEdBQUs7Z0JBakNsQixTQUFTLEdBbUNOLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7ZUE5Q0QsY0FBaUIsU0FrRGQsU0FBUyJ9