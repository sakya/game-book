import { PropertyObject } from "./propertyObject";
export declare class Item extends PropertyObject {
    id: string;
    type: string;
    name: string;
    description: string;
    isEquipped: boolean;
    constructor(id: string);
}