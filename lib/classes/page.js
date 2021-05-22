"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.Action = void 0;
var Action = /** @class */ (function () {
    function Action() {
    }
    return Action;
}()); // Action
exports.Action = Action;
var Page = /** @class */ (function () {
    function Page() {
        this.number = 0;
        this.text = '';
        this.actions = [];
    }
    return Page;
}()); // Page
exports.Page = Page;
