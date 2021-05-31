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
        },
        {
            key: "fromDirection",
            value: function fromDirection(direction) {
                var x = direction.x, y = direction.y, coordinates = new Coordinates(x, y);
                return coordinates;
            }
        },
        {
            key: "fromMagnitudeAndDirection",
            value: function fromMagnitudeAndDirection(magnitude, direction) {
                var x = direction.x, y = direction.y;
                x *= magnitude;
                y *= magnitude;
                var coordinates = new Coordinates(x, y);
                return coordinates;
            }
        }
    ]);
    return Coordinates;
}();
exports.default = Coordinates;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb29yZGluYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiB0aGlzLnk7XG4gIH1cblxuICBhcmVWYWxpZCgpIHtcbiAgICBjb25zdCB2YWxpZFggPSAodGhpcy54ID49IDApICYmICh0aGlzLnggPCBCT0FSRF9TSVpFKSxcbiAgICAgICAgICB2YWxpZFkgPSAodGhpcy55ID49IDApICYmICh0aGlzLnkgPCBCT0FSRF9TSVpFKSxcbiAgICAgICAgICB2YWxpZCA9IHZhbGlkWCAmJiB2YWxpZFk7XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBhZGQoY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzLmdldFkoKTtcblxuICAgIHggKz0gdGhpcy54O1xuICAgIHkgKz0gdGhpcy55O1xuXG4gICAgY29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tWEFuZFkoeCwgeSk7ICAvLy9cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIG1hdGNoKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgICB5ID0gY29vcmRpbmF0ZXMuZ2V0WSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAodGhpcy54ID09PSB4KSAmJiAodGhpcy55ID09PSB5KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5kWSh4LCB5KSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBuZXcgQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGRpcmVjdGlvbixcbiAgICAgICAgICBjb29yZGluYXRlcyA9IG5ldyBDb29yZGluYXRlcyh4LCB5KTtcblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFnbml0dWRlQW5kRGlyZWN0aW9uKG1hZ25pdHVkZSwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gZGlyZWN0aW9uO1xuXG4gICAgeCAqPSBtYWduaXR1ZGU7XG4gICAgeSAqPSBtYWduaXR1ZGU7XG5cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IG5ldyBDb29yZGluYXRlcyh4LCB5KTtcblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWUsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkIsV0FBVzthQUFYLFdBQVcsQ0FDbEIsQ0FBQyxFQUFFLENBQUM7OEJBREcsV0FBVzthQUV2QixDQUFDLEdBQUcsQ0FBQzthQUNMLENBQUMsR0FBRyxDQUFDOztpQkFITyxXQUFXOztZQU05QixHQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJOzRCQUNVLENBQUM7Ozs7WUFHZixHQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJOzRCQUNVLENBQUM7Ozs7WUFHZixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNBLE1BQU0sUUFBUyxDQUFDLElBQUksQ0FBQyxTQUFXLENBQUMsR0FqQmhCLFVBQWEsYUFrQjlCLE1BQU0sUUFBUyxDQUFDLElBQUksQ0FBQyxTQUFXLENBQUMsR0FsQmhCLFVBQWEsYUFtQjlCLEtBQUssR0FBRyxNQUFNLElBQUksTUFBTTt1QkFFdkIsS0FBSzs7OztZQUdkLEdBQUcsR0FBSCxHQUFHOzRCQUFILEdBQUcsQ0FBQyxXQUFXO29CQUNULENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUk7Z0JBRXhCLENBQUMsU0FBUyxDQUFDO2dCQUNYLENBQUMsU0FBUyxDQUFDO2dCQUVYLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QyxXQUFXOzs7O1lBR3BCLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxXQUFXO29CQUNULENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUNwQixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsT0FBTyxRQUFTLENBQUMsS0FBSyxDQUFDLFNBQVcsQ0FBQyxLQUFLLENBQUM7dUJBRXhDLE9BQU87Ozs7O1lBR1QsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNiLFdBQVcsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7dUJBRWpDLFdBQVc7Ozs7WUFHYixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsU0FBUztvQkFDcEIsQ0FBQyxHQUFRLFNBQVMsQ0FBbEIsQ0FBQyxFQUFFLENBQUMsR0FBSyxTQUFTLENBQWYsQ0FBQyxFQUNOLFdBQVcsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7dUJBRWpDLFdBQVc7Ozs7WUFHYixHQUF5QixHQUF6Qix5QkFBeUI7NEJBQXpCLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxTQUFTO29CQUM3QyxDQUFDLEdBQVEsU0FBUyxDQUFsQixDQUFDLEVBQUUsQ0FBQyxHQUFLLFNBQVMsQ0FBZixDQUFDO2dCQUVWLENBQUMsSUFBSSxTQUFTO2dCQUNkLENBQUMsSUFBSSxTQUFTO29CQUVSLFdBQVcsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7dUJBRWpDLFdBQVc7Ozs7V0EvREQsV0FBVzs7a0JBQVgsV0FBVyJ9