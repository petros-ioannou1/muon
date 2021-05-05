"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _styles = require("./styles");
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
var Coordinates = function() {
    function Coordinates(x, y) {
        _classCallCheck(this, Coordinates);
        this.x = x;
        this.y = y;
    }
    _createClass(Coordinates, [
        {
            key: "getX",
            value: function getX() {
                return this.x;
            }
        },
        {
            key: "getY",
            value: function getY() {
                return this.y;
            }
        },
        {
            key: "getTop",
            value: function getTop() {
                var top = "".concat((_constants.BOARD_SIZE - 1 - this.y) * _styles.squareDivSize, "rem");
                return top;
            }
        },
        {
            key: "getLeft",
            value: function getLeft() {
                var left = "".concat(this.x * _styles.squareDivSize, "rem");
                return left;
            }
        }
    ], [
        {
            key: "fromXAndY",
            value: function fromXAndY(x, y) {
                var coordinates = new Coordinates(x, y);
                return coordinates;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var x = 0, y = 0, coordinates = new Coordinates(x, y);
                return coordinates;
            }
        }
    ]);
    return Coordinates;
}();
exports.default = Coordinates;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb29yZGluYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc3F1YXJlRGl2U2l6ZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiB0aGlzLnk7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgY29uc3QgdG9wID0gYCR7KChCT0FSRF9TSVpFIC0gMSkgLSB0aGlzLnkpICogc3F1YXJlRGl2U2l6ZX1yZW1gO1xuXG4gICAgcmV0dXJuIHRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgY29uc3QgbGVmdCA9IGAke3RoaXMueCAqIHNxdWFyZURpdlNpemV9cmVtYDtcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5kWSh4LCB5KSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBuZXcgQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBuZXcgQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLFVBQWE7SUFDVixPQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixXQUFXO2FBQVgsV0FBVyxDQUNsQixDQUFDLEVBQUUsQ0FBQzs4QkFERyxXQUFXO2FBRXZCLENBQUMsR0FBRyxDQUFDO2FBQ0wsQ0FBQyxHQUFHLENBQUM7O2lCQUhPLFdBQVc7O1lBTTlCLEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUk7NEJBQ1UsQ0FBQzs7OztZQUdmLEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUk7NEJBQ1UsQ0FBQzs7OztZQUdmLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsR0FBRyxNQUFrRCxNQUFHLEVBbEJ2QyxVQUFhLGNBa0JOLENBQUMsUUFBUyxDQUFDLElBakJmLE9BQVUsaUJBaUJ1QixHQUFHO3VCQUV2RCxHQUFHOzs7O1lBR1osR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDQyxJQUFJLE1BQTZCLE1BQUcsTUFBckIsQ0FBQyxHQXZCSSxPQUFVLGlCQXVCRyxHQUFHO3VCQUVuQyxJQUFJOzs7OztZQUdOLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDYixXQUFXLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO3VCQUVqQyxXQUFXOzs7O1lBR2IsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVixDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsV0FBVyxPQUFPLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt1QkFFakMsV0FBVzs7OztXQXJDRCxXQUFXOztrQkFBWCxXQUFXIn0=