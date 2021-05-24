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
exports.Item = void 0;
var propertyObject_1 = require("./propertyObject");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id) {
        var _this = _super.call(this) || this;
        _this.type = '';
        _this.name = '';
        _this.description = '';
        _this.isEquipped = false;
        _this.equipLocation = '';
        _this.id = id;
        return _this;
    }
    Object.defineProperty(Item.prototype, "canBeEquipped", {
        get: function () {
            var _a;
            return ((_a = this.equipLocation) === null || _a === void 0 ? void 0 : _a.length) > 0;
        } // canBeEquipped
        ,
        enumerable: false,
        configurable: true
    });
    return Item;
}(propertyObject_1.PropertyObject)); // Item
exports.Item = Item;
