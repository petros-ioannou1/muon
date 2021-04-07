"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.squareDivHeight = exports.boardDivWidth = exports.boardDivSize = exports.squareDivSize = exports.boardDivHeight = exports.squareDivWidth = void 0;
var _constants = require("./constants");
var squareDivSize = 6;
exports.squareDivSize = squareDivSize;
var boardDivSize = squareDivSize * _constants.BOARD_SIZE;
exports.boardDivSize = boardDivSize;
var boardDivWidth = "".concat(boardDivSize, "rem");
exports.boardDivWidth = boardDivWidth;
var boardDivHeight = "".concat(boardDivSize, "rem");
exports.boardDivHeight = boardDivHeight;
var squareDivWidth = "".concat(squareDivSize, "rem");
exports.squareDivWidth = squareDivWidth;
var squareDivHeight = "".concat(squareDivSize, "rem");
exports.squareDivHeight = squareDivHeight;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJPQVJEX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNxdWFyZURpdlNpemUgPSA2O1xuZXhwb3J0IGNvbnN0IGJvYXJkRGl2U2l6ZSA9IHNxdWFyZURpdlNpemUgKiBCT0FSRF9TSVpFO1xuXG5leHBvcnQgY29uc3QgYm9hcmREaXZXaWR0aCA9IGAke2JvYXJkRGl2U2l6ZX1yZW1gO1xuZXhwb3J0IGNvbnN0IGJvYXJkRGl2SGVpZ2h0ID0gYCR7Ym9hcmREaXZTaXplfXJlbWA7XG5leHBvcnQgY29uc3Qgc3F1YXJlRGl2V2lkdGggPSBgJHtzcXVhcmVEaXZTaXplfXJlbWA7XG5leHBvcnQgY29uc3Qgc3F1YXJlRGl2SGVpZ2h0ID0gYCR7c3F1YXJlRGl2U2l6ZX1yZW1gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWUsVUFBYTtJQUUzQixhQUFhLEdBQUcsQ0FBQztRQUFqQixhQUFhLEdBQWIsYUFBYTtJQUNiLFlBQVksR0FBRyxhQUFhLEdBSGQsVUFBYTtRQUczQixZQUFZLEdBQVosWUFBWTtJQUVaLGFBQWEsTUFBbUIsTUFBRyxDQUFoQixZQUFZLEdBQUMsR0FBRztRQUFuQyxhQUFhLEdBQWIsYUFBYTtJQUNiLGNBQWMsTUFBbUIsTUFBRyxDQUFoQixZQUFZLEdBQUMsR0FBRztRQUFwQyxjQUFjLEdBQWQsY0FBYztJQUNkLGNBQWMsTUFBb0IsTUFBRyxDQUFqQixhQUFhLEdBQUMsR0FBRztRQUFyQyxjQUFjLEdBQWQsY0FBYztJQUNkLGVBQWUsTUFBb0IsTUFBRyxDQUFqQixhQUFhLEdBQUMsR0FBRztRQUF0QyxlQUFlLEdBQWYsZUFBZSJ9