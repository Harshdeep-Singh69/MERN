var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var xyz = /** @class */ (function () {
    function xyz() {
    }
    xyz.prototype.abc = function () {
        console.log("Harshdeep");
    };
    return xyz;
}());
var inher = /** @class */ (function (_super) {
    __extends(inher, _super);
    function inher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    inher.prototype.pqr = function () {
        console.log("Singh");
    };
    return inher;
}(xyz));
var d = new inher;
d.abc();
