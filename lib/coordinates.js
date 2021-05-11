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
        },
        {
            key: "add",
            value: function add(coordinates) {
                var x = coordinates.getX(), y = coordinates.getY();
                x += this.x;
                y += this.y;
                coordinates = Coordinates.fromXAndY(x, y); ///
                return coordinates;
            }
        },
        {
            key: "match",
            value: function match(coordinates) {
                var x = coordinates.getX(), y = coordinates.getY(), matches = this.x === x && this.y === y;
                return matches;
            }
        }
    ], [
        {
            key: "fromXAndY",
            value: function fromXAndY(x, y) {
                var coordinates = new Coordinates(x, y);
                return coordinates;
            }
        }
    ]);
    return Coordinates;
}();
exports.default = Coordinates;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb29yZGluYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc3F1YXJlRGl2U2l6ZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiB0aGlzLnk7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgY29uc3QgdG9wID0gYCR7KChCT0FSRF9TSVpFIC0gMSkgLSB0aGlzLnkpICogc3F1YXJlRGl2U2l6ZX1yZW1gO1xuXG4gICAgcmV0dXJuIHRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgY29uc3QgbGVmdCA9IGAke3RoaXMueCAqIHNxdWFyZURpdlNpemV9cmVtYDtcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgYWRkKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlcy5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlcy5nZXRZKCk7XG5cbiAgICB4ICs9IHRoaXMueDtcbiAgICB5ICs9IHRoaXMueTtcblxuICAgIGNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbVhBbmRZKHgsIHkpOyAgLy8vXG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBtYXRjaChjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlcy5nZXRYKCksXG4gICAgICAgICAgeSA9IGNvb3JkaW5hdGVzLmdldFkoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKHRoaXMueCA9PT0geCkgJiYgKHRoaXMueSA9PT0geSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZFkoeCwgeSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gbmV3IENvb3JkaW5hdGVzKHgsIHkpO1xuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZSxVQUFhO0lBQ1YsT0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkIsV0FBVzthQUFYLFdBQVcsQ0FDbEIsQ0FBQyxFQUFFLENBQUM7OEJBREcsV0FBVzthQUV2QixDQUFDLEdBQUcsQ0FBQzthQUNMLENBQUMsR0FBRyxDQUFDOztpQkFITyxXQUFXOztZQU05QixHQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJOzRCQUNVLENBQUM7Ozs7WUFHZixHQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJOzRCQUNVLENBQUM7Ozs7WUFHZixHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNFLEdBQUcsTUFBa0QsTUFBRyxFQWxCdkMsVUFBYSxjQWtCTixDQUFDLFFBQVMsQ0FBQyxJQWpCZixPQUFVLGlCQWlCdUIsR0FBRzt1QkFFdkQsR0FBRzs7OztZQUdaLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ0MsSUFBSSxNQUE2QixNQUFHLE1BQXJCLENBQUMsR0F2QkksT0FBVSxpQkF1QkcsR0FBRzt1QkFFbkMsSUFBSTs7OztZQUdiLEdBQUcsR0FBSCxHQUFHOzRCQUFILEdBQUcsQ0FBQyxXQUFXO29CQUNULENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUk7Z0JBRXhCLENBQUMsU0FBUyxDQUFDO2dCQUNYLENBQUMsU0FBUyxDQUFDO2dCQUVYLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QyxXQUFXOzs7O1lBR3BCLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxXQUFXO29CQUNULENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsT0FBTyxRQUFTLENBQUMsS0FBSyxDQUFDLFNBQVcsQ0FBQyxLQUFLLENBQUM7dUJBRXhDLE9BQU87Ozs7O1lBR1QsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNiLFdBQVcsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7dUJBRWpDLFdBQVc7Ozs7V0FqREQsV0FBVzs7a0JBQVgsV0FBVyJ9