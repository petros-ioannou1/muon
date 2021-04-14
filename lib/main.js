"use strict";
require("juxtapose");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _view = _interopRequireDefault(require("./view"));
var _createMethods = _interopRequireDefault(require("./createMethods"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ React.createElement(_view.default, null), model = null, scheduler = null;
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
renderStyles();
body.mount(view);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IGNyZWF0ZU1ldGhvZHMgZnJvbSBcIi4vY3JlYXRlTWV0aG9kc1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIHZpZXcgPVxuXG4gICAgICAgIDxWaWV3Lz5cblxuICAgICAgLFxuICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgc2NoZWR1bGVyID0gbnVsbDtcblxuY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudCh2aWV3KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztJQUlVLGNBQWlCO0lBRWxCLEtBQU07SUFDQSxXQUFZO0lBRXRCLEtBQVE7SUFDQyxjQUFpQjs7Ozs7O0lBRW5DLFlBQVksR0FSRSxjQUFpQixTQVEvQixZQUFZO0lBRWQsSUFBSSxPQVJXLEtBQU0sU0FTckIsSUFBSSxxQ0FOTyxLQUFRLGlCQVduQixLQUFLLEdBQUcsSUFBSSxFQUNaLFNBQVMsR0FBRyxJQUFJO0FBZEssV0FBWSxZQWdCNUIsYUFBYSxDQWJFLGNBQWlCLFVBYUgsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJO0FBRTlELFlBQVk7QUFFWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUkifQ==