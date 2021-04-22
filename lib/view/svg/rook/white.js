"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 100%;\n  height: 100%;\n  position: absolute; \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var WhiteRookSVG = function(properties) {
    var className = properties.className;
    return( /*#__PURE__*/ React.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 46 46",
        className: "".concat(className, " white-rook")
    }, /*#__PURE__*/ React.createElement("g", {
        style: "opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 34,14 L 31,17 L 14,17 L 11,14"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
        style: "stroke-linecap:butt; stroke-linejoin:miter;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 11,14 L 34,14",
        style: "fill:none; stroke:#000000; stroke-linejoin:miter;"
    }))));
};
var _default = _easyWithStyle.default(WhiteRookSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L3N2Zy9yb29rL3doaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuY29uc3QgV2hpdGVSb29rU1ZHID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgICAgPHN2ZyB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiB2aWV3Qm94PVwiMCAwIDQ2IDQ2XCIgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHdoaXRlLXJvb2tgfT5cbiAgICAgICAgPGcgc3R5bGU9XCJvcGFjaXR5OjE7IGZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjE7IGZpbGwtcnVsZTpldmVub2RkOyBzdHJva2U6IzAwMDAwMDsgc3Ryb2tlLXdpZHRoOjEuNTsgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7IHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgc3Ryb2tlLW9wYWNpdHk6MTtcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSA5LDM5IEwgMzYsMzkgTCAzNiwzNiBMIDksMzYgTCA5LDM5IHogXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJzdHJva2UtbGluZWNhcDpidXR0O1wiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTIsMzYgTCAxMiwzMiBMIDMzLDMyIEwgMzMsMzYgTCAxMiwzNiB6IFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwic3Ryb2tlLWxpbmVjYXA6YnV0dDtcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDExLDE0IEwgMTEsOSBMIDE1LDkgTCAxNSwxMSBMIDIwLDExIEwgMjAsOSBMIDI1LDkgTCAyNSwxMSBMIDMwLDExIEwgMzAsOSBMIDM0LDkgTCAzNCwxNFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwic3Ryb2tlLWxpbmVjYXA6YnV0dDtcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDM0LDE0IEwgMzEsMTcgTCAxNCwxNyBMIDExLDE0XCIgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAzMSwxNyBMIDMxLDI5LjUgTCAxNCwyOS41IEwgMTQsMTdcIlxuICAgICAgICAgICAgICBzdHlsZT1cInN0cm9rZS1saW5lY2FwOmJ1dHQ7IHN0cm9rZS1saW5lam9pbjptaXRlcjtcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDMxLDI5LjUgTCAzMi41LDMyIEwgMTIuNSwzMiBMIDE0LDI5LjVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDExLDE0IEwgMzQsMTRcIlxuICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS1saW5lam9pbjptaXRlcjtcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFdoaXRlUm9va1NWRylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtDQSxpRUFNdkM7Ozs7Ozs7SUF0Q00sWUFBWSxZQUFJLFVBQVU7UUFDdEIsU0FBUyxHQUFLLFVBQVUsQ0FBeEIsU0FBUzsrQ0FJWixHQUFHO1FBQUMsS0FBSyxHQUFDLEVBQUk7UUFBQyxNQUFNLEdBQUMsRUFBSTtRQUFDLE9BQU8sR0FBQyxTQUFXO1FBQUMsU0FBUyxLQUFlLE1BQVcsQ0FBckIsU0FBUyxHQUFDLFdBQVc7MENBQ2hGLENBQUM7UUFBQyxLQUFLLEdBQUMsc01BQXdNOzBDQUM5TSxJQUFJO1FBQ0QsQ0FBQyxHQUFDLHVDQUF5QztRQUMzQyxLQUFLLEdBQUMsb0JBQXNCOzJDQUMvQixJQUFJO1FBQ0QsQ0FBQyxHQUFDLDBDQUE0QztRQUM5QyxLQUFLLEdBQUMsb0JBQXNCOzJDQUMvQixJQUFJO1FBQ0QsQ0FBQyxHQUFDLHlGQUEyRjtRQUM3RixLQUFLLEdBQUMsb0JBQXNCOzJDQUMvQixJQUFJO1FBQ0QsQ0FBQyxHQUFDLCtCQUFpQzsyQ0FDdEMsSUFBSTtRQUNELENBQUMsR0FBQyxtQ0FBcUM7UUFDdkMsS0FBSyxHQUFDLDJDQUE2QzsyQ0FDdEQsSUFBSTtRQUNELENBQUMsR0FBQyx1Q0FBeUM7MkNBQzlDLElBQUk7UUFDRCxDQUFDLEdBQUMsZUFBaUI7UUFDbkIsS0FBSyxHQUFDLGlEQUFtRDs7O2VBM0JqRCxjQUFpQixTQWtDZCxZQUFZIn0=