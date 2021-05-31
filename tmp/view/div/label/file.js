"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _label = _interopRequireDefault(require("../../div/label"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var FileLabelDiv = function(LabelDiv) {
    _inherits(FileLabelDiv, _label.default);
    function FileLabelDiv() {
        _classCallCheck(this, FileLabelDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileLabelDiv).apply(this, arguments));
    }
    _createClass(FileLabelDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, coordinates = _properties.coordinates, x = coordinates.getX(), file = fileFromX(x), html = file;
                this.html(html);
                this.applyCoordinates(coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            }
        }
    ]);
    return FileLabelDiv;
}(_label.default);
_defineProperty(FileLabelDiv, "defaultProperties", {
    className: "file"
});
exports.default = FileLabelDiv;
function fileFromX(x) {
    var index = x, files = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H"
    ], file = files[index];
    return file;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sYWJlbC9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWxEaXYgZnJvbSBcIi4uLy4uL2Rpdi9sYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTGFiZWxEaXYgZXh0ZW5kcyBMYWJlbERpdiB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB4ID0gY29vcmRpbmF0ZXMuZ2V0WCgpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlRnJvbVgoeCksXG4gICAgICAgICAgaHRtbCA9IGZpbGU7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGVcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxlRnJvbVgoeCkge1xuICBjb25zdCBpbmRleCA9IHgsICAvLy9cbiAgICAgICAgZmlsZXMgPSBbIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiBdLFxuICAgICAgICBmaWxlID0gZmlsZXNbaW5kZXhdO1xuXG4gIHJldHVybiBmaWxlO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsTUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakIsWUFBWSxZQUFTLFFBQVE7Y0FBN0IsWUFBWSxFQUZaLE1BQWlCO2FBRWpCLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUMvQixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNrQixXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXLEVBQ2IsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLElBQ3BCLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUNsQixJQUFJLEdBQUcsSUFBSTtxQkFFWixJQUFJLENBQUMsSUFBSTtxQkFFVCxnQkFBZ0IsQ0FBQyxXQUFXOzs7O1lBR25DLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7Ozs7V0FaUSxZQUFZO0VBRlosTUFBaUI7Z0JBRWpCLFlBQVksR0FnQnhCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7a0JBakJBLFlBQVk7U0FxQnhCLFNBQVMsQ0FBQyxDQUFDO1FBQ1osS0FBSyxHQUFHLENBQUMsRUFDVCxLQUFLO1NBQUssQ0FBRztTQUFFLENBQUc7U0FBRSxDQUFHO1NBQUUsQ0FBRztTQUFFLENBQUc7U0FBRSxDQUFHO1NBQUUsQ0FBRztTQUFFLENBQUc7T0FDaEQsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLO1dBRWpCLElBQUkifQ==