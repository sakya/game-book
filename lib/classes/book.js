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
exports.Book = void 0;
var propertyObject_1 = require("./propertyObject");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        var _this = _super.call(this) || this;
        _this.id = '';
        _this.serie = '';
        _this.index = 0;
        _this.title = '';
        _this.authors = [];
        _this.illustrators = [];
        _this.publisher = '';
        _this.version = '';
        _this.pages = [];
        return _this;
    }
    Book.prototype.getPage = function (id) {
        var p = this.pages.filter(function (p) { return p.id == id; });
        if (p.length > 0)
            return p[0];
        return null;
    }; // getPage
    Book.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    }; // getRandomNumber
    return Book;
}(propertyObject_1.PropertyObject));
exports.Book = Book;
