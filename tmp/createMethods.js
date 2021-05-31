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
    var highlightCoordinates = function highlightCoordinates(coordinates) {
        view.highlightCoordinates(coordinates);
    };
    var unhighlightCoordinates = function unhighlightCoordinates(coordinates) {
        view.unhighlightCoordinates(coordinates);
    };
    return {
        highlightMoves: highlightMoves,
        unhighlightMoves: unhighlightMoves,
        getSquareDivWidth: getSquareDivWidth,
        getSquareDivHeight: getSquareDivHeight,
        highlightCoordinates: highlightCoordinates,
        unhighlightCoordinates: unhighlightCoordinates
    };
}
exports.default = createMethods;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gaGlnaGxpZ2h0TW92ZXMobW92ZXMpIHtcbiAgICB2aWV3LmhpZ2hsaWdodE1vdmVzKG1vdmVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaGlnaGxpZ2h0TW92ZXMoKSB7XG4gICAgdmlldy51bmhpZ2hsaWdodE1vdmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcXVhcmVEaXZXaWR0aCgpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZXaWR0aCA9IHZpZXcuZ2V0U3F1YXJlRGl2V2lkdGgoKTtcblxuICAgIHJldHVybiBzcXVhcmVEaXZXaWR0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNxdWFyZURpdkhlaWdodCgpIHtcbiAgICBjb25zdCBzcXVhcmVEaXZIZWlnaHQgPSB2aWV3LmdldFNxdWFyZURpdkhlaWdodCgpO1xuXG4gICAgcmV0dXJuIHNxdWFyZURpdkhlaWdodDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgdmlldy5oaWdobGlnaHRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmhpZ2hsaWdodENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgdmlldy51bmhpZ2hsaWdodENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIGhpZ2hsaWdodE1vdmVzLFxuICAgIHVuaGlnaGxpZ2h0TW92ZXMsXG4gICAgZ2V0U3F1YXJlRGl2V2lkdGgsXG4gICAgZ2V0U3F1YXJlRGl2SGVpZ2h0LFxuICAgIGhpZ2hsaWdodENvb3JkaW5hdGVzLFxuICAgIHVuaGlnaGxpZ2h0Q29vcmRpbmF0ZXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztTQUVZLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDakQsY0FBYyxZQUFkLGNBQWMsQ0FBQyxLQUFLO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSzs7UUFHbEIsZ0JBQWdCLFlBQWhCLGdCQUFnQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCOztRQUdkLGlCQUFpQixZQUFqQixpQkFBaUI7WUFDbEIsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7ZUFFdEMsY0FBYzs7UUFHZCxrQkFBa0IsWUFBbEIsa0JBQWtCO1lBQ25CLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCO2VBRXhDLGVBQWU7O1FBR2Ysb0JBQW9CLFlBQXBCLG9CQUFvQixDQUFDLFdBQVc7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVc7O1FBRzlCLHNCQUFzQixZQUF0QixzQkFBc0IsQ0FBQyxXQUFXO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXOzs7UUFJdkMsY0FBYyxFQUFkLGNBQWM7UUFDZCxnQkFBZ0IsRUFBaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQWxCLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBcEIsb0JBQW9CO1FBQ3BCLHNCQUFzQixFQUF0QixzQkFBc0I7OztrQkFuQ0YsYUFBYSJ9