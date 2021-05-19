"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function createMethods(scheduler, model, view) {
    var highlightMoves = function highlightMoves(moves) {
        view.highlightMoves(moves);
    };
    var unhighlightMoves = function unhighlightMoves() {
        view.unhighlightMoves();
    };
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
        highlightMoves: highlightMoves,
        unhighlightMoves: unhighlightMoves,
        getSquareDivWidth: getSquareDivWidth,
        getSquareDivHeight: getSquareDivHeight,
        highlightSquareDiv: highlightSquareDiv,
        unhighlightSquareDiv: unhighlightSquareDiv
    };
}
exports.default = createMethods;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gaGlnaGxpZ2h0TW92ZXMobW92ZXMpIHtcbiAgICB2aWV3LmhpZ2hsaWdodE1vdmVzKG1vdmVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaGlnaGxpZ2h0TW92ZXMoKSB7XG4gICAgdmlldy51bmhpZ2hsaWdodE1vdmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcXVhcmVEaXZXaWR0aCgpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZXaWR0aCA9IHZpZXcuZ2V0U3F1YXJlRGl2V2lkdGgoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXZXaWR0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNxdWFyZURpdkhlaWdodCgpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZIZWlnaHQgPSB2aWV3LmdldFNxdWFyZURpdkhlaWdodCgpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdkhlaWdodDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcykge1xuICAgIHZpZXcuaGlnaGxpZ2h0U3F1YXJlRGl2KGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaGlnaGxpZ2h0U3F1YXJlRGl2KGNvb3JkaW5hdGVzKSB7XG4gICAgdmlldy51bmhpZ2hsaWdodFNxdWFyZURpdihjb29yZGluYXRlcyk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBoaWdobGlnaHRNb3ZlcyxcbiAgICB1bmhpZ2hsaWdodE1vdmVzLFxuICAgIGdldFNxdWFyZURpdldpZHRoLFxuICAgIGdldFNxdWFyZURpdkhlaWdodCxcbiAgICBoaWdobGlnaHRTcXVhcmVEaXYsXG4gICAgdW5oaWdobGlnaHRTcXVhcmVEaXZcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztTQUVZLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDakQsY0FBYyxZQUFkLGNBQWMsQ0FBQyxLQUFLO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSzs7UUFHbEIsZ0JBQWdCLFlBQWhCLGdCQUFnQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCOztRQUdkLGlCQUFpQixZQUFqQixpQkFBaUI7WUFDbEIsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7ZUFFdEMsY0FBYzs7UUFHZCxrQkFBa0IsWUFBbEIsa0JBQWtCO1lBQ25CLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCO2VBRXhDLGVBQWU7O1FBR2Ysa0JBQWtCLFlBQWxCLGtCQUFrQixDQUFDLFdBQVc7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7O1FBRzVCLG9CQUFvQixZQUFwQixvQkFBb0IsQ0FBQyxXQUFXO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXOzs7UUFJckMsY0FBYyxFQUFkLGNBQWM7UUFDZCxnQkFBZ0IsRUFBaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQWxCLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQixFQUFwQixvQkFBb0I7OztrQkFuQ0EsYUFBYSJ9