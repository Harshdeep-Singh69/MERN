var inter = /** @class */ (function () {
    function inter() {
    }
    inter.prototype.cDetails = function () {
        console.log('blue colour');
    };
    inter.prototype.modelName = function () {
        console.log('bmw');
    };
    return inter;
}());
var d = new inter;
d.cDetails();
d.modelName();
