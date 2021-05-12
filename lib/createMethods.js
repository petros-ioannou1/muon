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
    var unhighlightSquareDiv = function unhighlightSquareDiv(coordinates) {
        view.unhighlightSquareDiv(coordinates);
    };
    return {
        getSquareDivWidth: getSquareDivWidth,
        getSquareDivHeight: getSquareDivHeight,
        highlightSquareDiv: highlightSquareDiv,
        unhighlightSquareDiv: unhighlightSquareDiv
    };
}
exports.default = createMethods;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZ2V0U3F1YXJlRGl2V2lkdGgoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSB2aWV3LmdldFNxdWFyZURpdldpZHRoKCk7XG5cbiAgICByZXR1cm4gc3F1YXJlRGl2V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcXVhcmVEaXZIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3F1YXJlRGl2SGVpZ2h0ID0gdmlldy5nZXRTcXVhcmVEaXZIZWlnaHQoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXZIZWlnaHQ7XG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRTcXVhcmVEaXYoY29vcmRpbmF0ZXMpIHtcbiAgICB2aWV3LmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcykge1xuICAgIHZpZXcudW5oaWdobGlnaHRTcXVhcmVEaXYoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgZ2V0U3F1YXJlRGl2V2lkdGgsXG4gICAgZ2V0U3F1YXJlRGl2SGVpZ2h0LFxuICAgIGhpZ2hsaWdodFNxdWFyZURpdixcbiAgICB1bmhpZ2hsaWdodFNxdWFyZURpdlxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1NBRVksYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUNqRCxpQkFBaUIsWUFBakIsaUJBQWlCO1lBQ2xCLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2VBRXRDLGNBQWM7O1FBR2Qsa0JBQWtCLFlBQWxCLGtCQUFrQjtZQUNuQixlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtlQUV4QyxlQUFlOztRQUdmLGtCQUFrQixZQUFsQixrQkFBa0IsQ0FBQyxXQUFXO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXOztRQUc1QixvQkFBb0IsWUFBcEIsb0JBQW9CLENBQUMsV0FBVztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVzs7O1FBSXJDLGlCQUFpQixFQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQWxCLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQixFQUFwQixvQkFBb0I7OztrQkF6QkEsYUFBYSJ9