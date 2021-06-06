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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.LinkAction = exports.Action = void 0;
var class_transformer_1 = require("class-transformer");
var propertyObject_1 = require("./propertyObject");
var Action = /** @class */ (function () {
    function Action(type, text) {
        this.enableCondition = '';
        this.visibleCondition = '';
        this.script = '';
        this.type = type;
        this.text = text;
    }
    /**
     * Run the enableCondition
     * @param player The player
     * @returns A boolean value
     */
    Action.prototype.isEnabled = function (player) {
        if (this.enableCondition && this.enableCondition.length > 0) {
            var body = "let player = arguments[0];\n                          " + this.enableCondition;
            var func = new Function(body);
            return func.call(null, player);
        }
        return true;
    }; // isEnabled
    /**
     * Run the visibleCondition
     * @param player The player
     * @returns A boolean value
     */
    Action.prototype.isVisible = function (player) {
        if (this.visibleCondition && this.visibleCondition.length > 0) {
            var body = "let player = arguments[0];\n                        " + this.visibleCondition;
            var func = new Function(body);
            return func.call(null, player);
        }
        return true;
    }; // isVisible
    /**
     * Run the script
     * @param player The player
     * @returns
     */
    Action.prototype.runScript = function (player) {
        if (this.script && this.script.length > 0) {
            var body = "let player = arguments[0];\n                        " + this.script;
            var func = new Function(body);
            return func.call(null, player);
        }
    }; // runScript    
    return Action;
}()); // Action
exports.Action = Action;
var LinkAction = /** @class */ (function (_super) {
    __extends(LinkAction, _super);
    function LinkAction(text, pageId) {
        var _this = _super.call(this, "LinkAction", text) || this;
        _this.pageId = '';
        _this.pageId = pageId;
        return _this;
    }
    return LinkAction;
}(Action)); // LinkAction
exports.LinkAction = LinkAction;
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this) || this;
        _this.id = '';
        _this.text = '';
        _this.actions = [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return Action; })
    ], Page.prototype, "actions", void 0);
    return Page;
}(propertyObject_1.PropertyObject)); // Page
exports.Page = Page;
