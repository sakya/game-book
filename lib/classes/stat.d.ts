import { PropertyObject } from "./propertyObject";
export declare class Stat extends PropertyObject {
    name: string;
    description: string;
    minValue: number;
    maxValue: number;
    private _value;
    constructor(name: string, minValue: number, maxValue: number);
    get value(): number;
    set value(value: number);
}
