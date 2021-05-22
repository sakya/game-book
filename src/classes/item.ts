import { PropertyObject } from "./propertyObject";

export class Item extends PropertyObject {
    public id: string;
    public type: string = '';
    public name: string = '';
    public description: string = '';
    public isEquipped: boolean = false;

    constructor(id: string) {
        super();
        this.id = id;
    }
} // Item