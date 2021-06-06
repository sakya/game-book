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
exports.Book = void 0;
var class_transformer_1 = require("class-transformer");
var page_1 = require("./page");
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
        _this.startPageId = '';
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
    Book.load = function (data) {
        return class_transformer_1.plainToClass(Book, data);
    }; // load
    __decorate([
        class_transformer_1.Type(function () { return page_1.Page; })
    ], Book.prototype, "pages", void 0);
    return Book;
}(propertyObject_1.PropertyObject));
exports.Book = Book;
