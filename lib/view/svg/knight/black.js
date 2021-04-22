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
var BlackKnightSVG = function(properties) {
    var className = properties.className;
    return( /*#__PURE__*/ React.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 46 46",
        className: "".concat(className, " black-knight")
    }, /*#__PURE__*/ React.createElement("g", {
        style: "opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
        style: "fill:#000000; stroke:#000000;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
        style: "fill:#000000; stroke:#000000;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
        style: "fill:#ffffff; stroke:#ffffff;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
        style: "fill:#ffffff; stroke:#ffffff;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ",
        style: "fill:#ffffff; stroke:none;"
    }))));
};
var _default = _easyWithStyle.default(BlackKnightSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L3N2Zy9rbmlnaHQvYmxhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5jb25zdCBCbGFja0tuaWdodFNWRyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICAgIDxzdmcgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgdmlld0JveD1cIjAgMCA0NiA0NlwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBibGFjay1rbmlnaHRgfT5cbiAgICAgICAgPGcgc3R5bGU9XCJvcGFjaXR5OjE7IGZpbGw6bm9uZTsgZmlsbC1vcGFjaXR5OjE7IGZpbGwtcnVsZTpldmVub2RkOyBzdHJva2U6IzAwMDAwMDsgc3Ryb2tlLXdpZHRoOjEuNTsgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7IHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgc3Ryb2tlLW9wYWNpdHk6MTtcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTSAyMiwxMCBDIDMyLjUsMTEgMzguNSwxOCAzOCwzOSBMIDE1LDM5IEMgMTUsMzAgMjUsMzIuNSAyMywxOFwiIHN0eWxlPVwiZmlsbDojMDAwMDAwOyBzdHJva2U6IzAwMDAwMDtcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNIDI0LDE4IEMgMjQuMzgsMjAuOTEgMTguNDUsMjUuMzcgMTYsMjcgQyAxMywyOSAxMy4xOCwzMS4zNCAxMSwzMSBDIDkuOTU4LDMwLjA2IDEyLjQxLDI3Ljk2IDExLDI4IEMgMTAsMjggMTEuMTksMjkuMjMgMTAsMzAgQyA5LDMwIDUuOTk3LDMxIDYsMjYgQyA2LDI0IDEyLDE0IDEyLDE0IEMgMTIsMTQgMTMuODksMTIuMSAxNCwxMC41IEMgMTMuMjcsOS41MDYgMTMuNSw4LjUgMTMuNSw3LjUgQyAxNC41LDYuNSAxNi41LDEwIDE2LjUsMTAgTCAxOC41LDEwIEMgMTguNSwxMCAxOS4yOCw4LjAwOCAyMSw3IEMgMjIsNyAyMiwxMCAyMiwxMFwiIHN0eWxlPVwiZmlsbDojMDAwMDAwOyBzdHJva2U6IzAwMDAwMDtcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNIDkuNSAyNS41IEEgMC41IDAuNSAwIDEgMSA4LjUsMjUuNSBBIDAuNSAwLjUgMCAxIDEgOS41IDI1LjUgelwiIHN0eWxlPVwiZmlsbDojZmZmZmZmOyBzdHJva2U6I2ZmZmZmZjtcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNIDE1IDE1LjUgQSAwLjUgMS41IDAgMSAxICAxNCwxNS41IEEgMC41IDEuNSAwIDEgMSAgMTUgMTUuNSB6XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuODY2LDAuNSwtMC41LDAuODY2LDkuNjkzLC01LjE3MylcIiBzdHlsZT1cImZpbGw6I2ZmZmZmZjsgc3Ryb2tlOiNmZmZmZmY7XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTSAyNC41NSwxMC40IEwgMjQuMSwxMS44NSBMIDI0LjYsMTIgQyAyNy43NSwxMyAzMC4yNSwxNC40OSAzMi41LDE4Ljc1IEMgMzQuNzUsMjMuMDEgMzUuNzUsMjkuMDYgMzUuMjUsMzkgTCAzNS4yLDM5LjUgTCAzNy40NSwzOS41IEwgMzcuNSwzOSBDIDM4LDI4Ljk0IDM2LjYyLDIyLjE1IDM0LjI1LDE3LjY2IEMgMzEuODgsMTMuMTcgMjguNDYsMTEuMDIgMjUuMDYsMTAuNSBMIDI0LjU1LDEwLjQgeiBcIiBzdHlsZT1cImZpbGw6I2ZmZmZmZjsgc3Ryb2tlOm5vbmU7XCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJsYWNrS25pZ2h0U1ZHKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcUJFLGlFQU16Qzs7Ozs7OztJQXpCTSxjQUFjLFlBQUksVUFBVTtRQUN4QixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOytDQUlaLEdBQUc7UUFBQyxLQUFLLEdBQUMsRUFBSTtRQUFDLE1BQU0sR0FBQyxFQUFJO1FBQUMsT0FBTyxHQUFDLFNBQVc7UUFBQyxTQUFTLEtBQWUsTUFBYSxDQUF2QixTQUFTLEdBQUMsYUFBYTswQ0FDbEYsQ0FBQztRQUFDLEtBQUssR0FBQyxtTUFBcU07MENBQzNNLElBQUk7UUFBQyxDQUFDLEdBQUMsNkRBQStEO1FBQUMsS0FBSyxHQUFDLDZCQUErQjsyQ0FDNUcsSUFBSTtRQUFDLENBQUMsR0FBQyxpVEFBbVQ7UUFBQyxLQUFLLEdBQUMsNkJBQStCOzJDQUNoVyxJQUFJO1FBQUMsQ0FBQyxHQUFDLDhEQUFnRTtRQUFDLEtBQUssR0FBQyw2QkFBK0I7MkNBQzdHLElBQUk7UUFBQyxDQUFDLEdBQUMsNkRBQStEO1FBQUMsU0FBUyxHQUFDLHlDQUEyQztRQUFDLEtBQUssR0FBQyw2QkFBK0I7MkNBQ2xLLElBQUk7UUFBQyxDQUFDLEdBQUMsbU9BQXFPO1FBQUMsS0FBSyxHQUFDLDBCQUE0Qjs7O2VBYnBRLGNBQWlCLFNBcUJkLGNBQWMifQ==