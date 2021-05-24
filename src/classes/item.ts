import { PropertyObject } from "./propertyObject";

export class Item extends PropertyObject {
    public id: string;
    public type: string = '';
    public name: string = '';
    public description: string = '';
    public isEquipped: boolean = false;
    public equipLocation: string = '';

    constructor(id: string) {
        super();
        this.id = id;
    }

    public get canBeEquipped(): boolean {
      return this.equipLocation?.length > 0;
    } // canBeEquipped
} // Item