"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function createMethods(scheduler, model, view) {
    var getSquareDivWidth = function getSquareDivWidth() {
        var squareDivWidth = view.getSquareDivWidth();
        return squareDivWidth;
    };
    var getSquareDivHeight = function getSquareDivHeight() {
        var squareDivHeight = view.getSquareDivHeight();
        return squareDivHeight;
    };
    return {
        getSquareDivWidth: getSquareDivWidth,
        getSquareDivHeight: getSquareDivHeight
    };
}
exports.default = createMethods;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZ2V0U3F1YXJlRGl2V2lkdGgoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSB2aWV3LmdldFNxdWFyZURpdldpZHRoKCk7XG5cbiAgICByZXR1cm4gc3F1YXJlRGl2V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcXVhcmVEaXZIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2SGVpZ2h0ID0gdmlldy5nZXRTcXVhcmVEaXZIZWlnaHQoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXZIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBnZXRTcXVhcmVEaXZXaWR0aCxcbiAgICBnZXRTcXVhcmVEaXZIZWlnaHRcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztTQUVZLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDakQsaUJBQWlCLFlBQWpCLGlCQUFpQjtZQUNsQixjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtlQUV0QyxjQUFjOztRQUdkLGtCQUFrQixZQUFsQixrQkFBa0I7WUFDbkIsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7ZUFFeEMsZUFBZTs7O1FBSXRCLGlCQUFpQixFQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQWxCLGtCQUFrQjs7O2tCQWZFLGFBQWEifQ==