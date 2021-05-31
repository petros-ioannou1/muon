"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Move = function() {
    function Move(pieceDiv, coordinates) {
        _classCallCheck(this, Move);
        this.pieceDiv = pieceDiv;
        this.coordinates = coordinates;
    }
    _createClass(Move, [
        {
            key: "getPieceDiv",
            value: function getPieceDiv() {
                return this.pieceDiv;
            }
        },
        {
            key: "getCoordinates",
            value: function getCoordinates() {
                return this.coordinates;
            }
        },
        {
            key: "make",
            value: function make() {
                this.pieceDiv.move(this.coordinates);
            }
        }
    ], [
        {
            key: "fromPieceDivAndCoordinates",
            value: function fromPieceDivAndCoordinates(pieceDiv, coordinates) {
                var move = new Move(pieceDiv, coordinates);
                return move;
            }
        }
    ]);
    return Move;
}();
exports.default = Move;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb3ZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlIHtcbiAgY29uc3RydWN0b3IocGllY2VEaXYsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5waWVjZURpdiA9IHBpZWNlRGl2O1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFBpZWNlRGl2KCkge1xuICAgIHJldHVybiB0aGlzLnBpZWNlRGl2O1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBtYWtlKCkge1xuICAgIHRoaXMucGllY2VEaXYubW92ZSh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGllY2VEaXZBbmRDb29yZGluYXRlcyhwaWVjZURpdiwgY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBtb3ZlID0gbmV3IE1vdmUocGllY2VEaXYsIGNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBtb3ZlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsSUFBSTthQUFKLElBQUksQ0FDWCxRQUFRLEVBQUUsV0FBVzs4QkFEZCxJQUFJO2FBRWhCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLFdBQVcsR0FBRyxXQUFXOztpQkFIYixJQUFJOztZQU12QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzRCQUNHLFFBQVE7Ozs7WUFHdEIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYzs0QkFDQSxXQUFXOzs7O1lBR3pCLEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUk7cUJBQ0csUUFBUSxDQUFDLElBQUksTUFBTSxXQUFXOzs7OztZQUc5QixHQUEwQixHQUExQiwwQkFBMEI7NEJBQTFCLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxXQUFXO29CQUMvQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXO3VCQUVwQyxJQUFJOzs7O1dBckJNLElBQUk7O2tCQUFKLElBQUkifQ==