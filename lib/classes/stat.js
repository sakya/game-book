"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = void 0;
var propertyObject_1 = require("./propertyObject");
var Stat = /** @class */ (function (_super) {
    __extends(Stat, _super);
    function Stat(name, minValue, maxValue) {
        var _this = _super.call(this) || this;
        _this.description = '';
        _this._value = 0;
        _this.name = name;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    Object.defineProperty(Stat.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value >= this.minValue && value <= this.maxValue)
                this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return Stat;
}(propertyObject_1.PropertyObject));
exports.Stat = Stat;
