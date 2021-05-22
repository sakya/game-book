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
exports.Player = void 0;
var propertyObject_1 = require("./propertyObject");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.inventory = [];
        _this.healthPoint = 0;
        return _this;
    }
    Player.prototype.isDead = function () {
        return this.healthPoint <= 0;
    }; // isDead
    Object.defineProperty(Player.prototype, "equipment", {
        get: function () {
            return this.inventory.filter(function (i) { return i.isEquipped; });
        } // equipment
        ,
        enumerable: false,
        configurable: true
    });
    return Player;
}(propertyObject_1.PropertyObject));
exports.Player = Player;
