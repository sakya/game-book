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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var class_transformer_1 = require("class-transformer");
var item_1 = require("./item");
var propertyObject_1 = require("./propertyObject");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.inventory = [];
        _this.equipmentSlots = [];
        _this.healthPoint = 0;
        return _this;
    }
    Player.prototype.isDead = function () {
        return this.healthPoint <= 0;
    }; // isDead
    Player.prototype.getItem = function (itemId) {
        var i = this.inventory.filter(function (i) { return i.id == itemId; });
        if (i.length > 0)
            return i[0];
        return null;
    }; // getItem
    Player.prototype.hasItem = function (itemId) {
        return this.getItem(itemId) != null;
    }; // hasItem
    Player.prototype.addItemToInventory = function (item) {
        if (!this.hasItem(item.id))
            this.inventory.push(item);
    }; // addItemToInventory
    Player.prototype.removeItemFromInventory = function (itemId) {
        var i = this.getItem(itemId);
        if (i != null) {
            var idx = this.inventory.indexOf(i);
            this.inventory.splice(idx, 1);
        }
        return false;
    }; // removeItemFromInventory
    Player.prototype.equipItem = function (itemId) {
        var i = this.getItem(itemId);
        if (i != null && i.canBeEquipped && !i.isEquipped) {
            var slots = __spreadArray([], this.equipmentSlots);
            for (var _i = 0, _a = this.equipment; _i < _a.length; _i++) {
                var ei = _a[_i];
                var idx = slots.indexOf(ei.equipLocation);
                if (idx != -1)
                    slots.splice(idx, 1);
            }
            if (slots.indexOf(i.equipLocation) != -1) {
                i.isEquipped = true;
                return true;
            }
        }
        return false;
    }; // equipItem
    Player.prototype.unequipItem = function (itemId) {
        var i = this.getItem(itemId);
        if (i != null && i.isEquipped) {
            i.isEquipped = false;
            return true;
        }
        return false;
    }; // unequipItem
    Object.defineProperty(Player.prototype, "equipment", {
        get: function () {
            return this.inventory.filter(function (i) { return i.isEquipped; });
        } // equipment
        ,
        enumerable: false,
        configurable: true
    });
    Player.load = function (data) {
        return class_transformer_1.plainToClass(Player, data);
    }; // load    
    __decorate([
        class_transformer_1.Type(function () { return item_1.Item; })
    ], Player.prototype, "inventory", void 0);
    return Player;
}(propertyObject_1.PropertyObject));
exports.Player = Player;
