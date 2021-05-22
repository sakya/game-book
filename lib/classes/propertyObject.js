"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyObject = void 0;
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
    return PropertyObject;
}());
exports.PropertyObject = PropertyObject;
