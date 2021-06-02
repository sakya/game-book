"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var class_transformer_1 = require("class-transformer");
var player_1 = require("./player");
var Status = /** @class */ (function () {
    function Status() {
        this.bookFile = '';
        this.bookPageId = '';
        this.player = null;
    }
    Object.defineProperty(Status.prototype, "bookFolder", {
        get: function () {
            if (this.bookFile) {
                var idx = this.bookFile.lastIndexOf('/');
                if (idx != -1)
                    return this.bookFile.substr(0, idx + 1);
            }
            return null;
        } // bookFolder
        ,
        enumerable: false,
        configurable: true
    });
    Status.load = function (data) {
        return class_transformer_1.plainToClass(Status, data);
    }; // load
    __decorate([
        class_transformer_1.Type(function () { return player_1.Player; })
    ], Status.prototype, "player", void 0);
    return Status;
}());
exports.Status = Status;
