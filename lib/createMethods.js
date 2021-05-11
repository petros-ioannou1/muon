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
    var highlightSquareDiv = function highlightSquareDiv(coordinates) {
        view.highlightSquareDiv(coordinates);
    };
    return {
        getSquareDivWidth: getSquareDivWidth,
        getSquareDivHeight: getSquareDivHeight,
        highlightSquareDiv: highlightSquareDiv
    };
}
exports.default = createMethods;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZ2V0U3F1YXJlRGl2V2lkdGgoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSB2aWV3LmdldFNxdWFyZURpdldpZHRoKCk7XG5cbiAgICByZXR1cm4gc3F1YXJlRGl2V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcXVhcmVEaXZIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2SGVpZ2h0ID0gdmlldy5nZXRTcXVhcmVEaXZIZWlnaHQoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXZIZWlnaHQ7XG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRTcXVhcmVEaXYoY29vcmRpbmF0ZXMpIHtcbiAgICB2aWV3LmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcyk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBnZXRTcXVhcmVEaXZXaWR0aCxcbiAgICBnZXRTcXVhcmVEaXZIZWlnaHQsXG4gICAgaGlnaGxpZ2h0U3F1YXJlRGl2XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7U0FFWSxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJO1FBQ2pELGlCQUFpQixZQUFqQixpQkFBaUI7WUFDbEIsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7ZUFFdEMsY0FBYzs7UUFHZCxrQkFBa0IsWUFBbEIsa0JBQWtCO1lBQ25CLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCO2VBRXhDLGVBQWU7O1FBR2Ysa0JBQWtCLFlBQWxCLGtCQUFrQixDQUFDLFdBQVc7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7OztRQUluQyxpQkFBaUIsRUFBakIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFsQixrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQWxCLGtCQUFrQjs7O2tCQXBCRSxhQUFhIn0=