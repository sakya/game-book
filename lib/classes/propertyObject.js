"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyObject = void 0;
var class_transformer_1 = require("class-transformer");
require("reflect-metadata");
var property_1 = require("./property");
var PropertyObject = /** @class */ (function () {
    function PropertyObject() {
        this.properties = [];
    }
    PropertyObject.prototype.getProperty = function (name) {
        var props = this.properties.filter(function (p) { return p.name == name; });
        if (props.length > 0)
            return props[0];
        return null;
    }; // getProperty
    PropertyObject.prototype.setProperty = function (name, value) {
        var p = this.getProperty(name);
        if (p != null)
            p.value = value;
        else {
            p = new property_1.Property(name, value);
            this.properties.push(p);
        }
    }; // setProperty
    __decorate([
        class_transformer_1.Type(function () { return property_1.Property; })
    ], PropertyObject.prototype, "properties", void 0);
    return PropertyObject;
}());
exports.PropertyObject = PropertyObject;
