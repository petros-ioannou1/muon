"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
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
            key: "areValid",
            value: function areValid() {
                var validX = this.x >= 0 && this.x < _constants.BOARD_SIZE, validY = this.y >= 0 && this.y < _constants.BOARD_SIZE, valid = validX && validY;
                return valid;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb29yZGluYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiB0aGlzLnk7XG4gIH1cblxuICBhcmVWYWxpZCgpIHtcbiAgICBjb25zdCB2YWxpZFggPSAodGhpcy54ID49IDApICYmICh0aGlzLnggPCBCT0FSRF9TSVpFKSxcbiAgICAgICAgICB2YWxpZFkgPSAodGhpcy55ID49IDApICYmICh0aGlzLnkgPCBCT0FSRF9TSVpFKSxcbiAgICAgICAgICB2YWxpZCA9IHZhbGlkWCAmJiB2YWxpZFk7XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBhZGQoY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzLmdldFkoKTtcblxuICAgIHggKz0gdGhpcy54O1xuICAgIHkgKz0gdGhpcy55O1xuXG4gICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSk7ICAvLy9cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIG1hdGNoKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgICB5ID0gY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAodGhpcy54ID09PSB4KSAmJiAodGhpcy55ID09PSB5KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5kWSh4LCB5KSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBuZXcgQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5CLFdBQVc7YUFBWCxXQUFXLENBQ2xCLENBQUMsRUFBRSxDQUFDOzhCQURHLFdBQVc7YUFFdkIsQ0FBQyxHQUFHLENBQUM7YUFDTCxDQUFDLEdBQUcsQ0FBQzs7aUJBSE8sV0FBVzs7WUFNOUIsR0FBSSxHQUFKLElBQUk7NEJBQUosSUFBSTs0QkFDVSxDQUFDOzs7O1lBR2YsR0FBSSxHQUFKLElBQUk7NEJBQUosSUFBSTs0QkFDVSxDQUFDOzs7O1lBR2YsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDQSxNQUFNLFFBQVMsQ0FBQyxJQUFJLENBQUMsU0FBVyxDQUFDLEdBakJoQixVQUFhLGFBa0I5QixNQUFNLFFBQVMsQ0FBQyxJQUFJLENBQUMsU0FBVyxDQUFDLEdBbEJoQixVQUFhLGFBbUI5QixLQUFLLEdBQUcsTUFBTSxJQUFJLE1BQU07dUJBRXZCLEtBQUs7Ozs7WUFHZCxHQUFHLEdBQUgsR0FBRzs0QkFBSCxHQUFHLENBQUMsV0FBVztvQkFDVCxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJO2dCQUV4QixDQUFDLFNBQVMsQ0FBQztnQkFDWCxDQUFDLFNBQVMsQ0FBQztnQkFFWCxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEMsV0FBVzs7OztZQUdwQixHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsV0FBVztvQkFDVCxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLElBQ3BCLE9BQU8sUUFBUyxDQUFDLEtBQUssQ0FBQyxTQUFXLENBQUMsS0FBSyxDQUFDO3VCQUV4QyxPQUFPOzs7OztZQUdULEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDYixXQUFXLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO3VCQUVqQyxXQUFXOzs7O1dBN0NELFdBQVc7O2tCQUFYLFdBQVcifQ==