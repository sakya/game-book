import "reflect-metadata";
import { Item } from "./item";
import { PropertyObject } from "./propertyObject";
export declare class Player extends PropertyObject {
    name: string;
    inventory: Item[];
    healthPoint: number;
    constructor();
    isDead(): boolean;
    get equipment(): Item[];
}
