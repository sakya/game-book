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
exports.Page = exports.LinkAction = exports.Action = void 0;
var propertyObject_1 = require("./propertyObject");
var Action = /** @class */ (function () {
    function Action(text) {
        this.text = text;
    }
    return Action;
}()); // Action
exports.Action = Action;
var LinkAction = /** @class */ (function (_super) {
    __extends(LinkAction, _super);
    function LinkAction(text, pageId) {
        var _this = _super.call(this, text) || this;
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
    return Page;
}(propertyObject_1.PropertyObject)); // Page
exports.Page = Page;
