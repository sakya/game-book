"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var class_transformer_1 = require("class-transformer");
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
                    return this.bookFile.substr(0, idx);
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
    return Status;
}());
exports.Status = Status;
