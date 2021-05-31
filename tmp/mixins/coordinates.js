"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _coordinates = require("../utilitites/coordinates");
function applyCoordinates(coordinates) {
    var x = coordinates.getX(), y = coordinates.getY(), top = _coordinates.topFromY(y), left = _coordinates.leftFromX(x);
    this.style(_constants.TOP, top);
    this.style(_constants.LEFT, left);
}
var _default = {
    applyCoordinates: applyCoordinates
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29vcmRpbmF0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRPUCwgTEVGVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRvcEZyb21ZLCBsZWZ0RnJvbVggfSBmcm9tIFwiLi4vdXRpbGl0aXRlcy9jb29yZGluYXRlc1wiO1xuXG5mdW5jdGlvbiBhcHBseUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHggPSBjb29yZGluYXRlcy5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlcy5nZXRZKCksXG4gICAgICAgIHRvcCA9IHRvcEZyb21ZKHkpLFxuICAgICAgICBsZWZ0ID0gbGVmdEZyb21YKHgpO1xuXG4gIHRoaXMuc3R5bGUoVE9QLCB0b3ApO1xuICB0aGlzLnN0eWxlKExFRlQsIGxlZnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwcGx5Q29vcmRpbmF0ZXNcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYyxVQUFjO0lBQ0osWUFBMkI7U0FFdEQsZ0JBQWdCLENBQUMsV0FBVztRQUM3QixDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksSUFDcEIsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLElBQ3BCLEdBQUcsR0FMeUIsWUFBMkIsVUFLeEMsQ0FBQyxHQUNoQixJQUFJLEdBTndCLFlBQTJCLFdBTXRDLENBQUM7U0FFbkIsS0FBSyxDQVRjLFVBQWMsTUFTdEIsR0FBRztTQUNkLEtBQUssQ0FWYyxVQUFjLE9BVXJCLElBQUk7OztJQUlyQixnQkFBZ0IsRUFBaEIsZ0JBQWdCIn0=