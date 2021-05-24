import { plainToClass, Type } from "class-transformer";
import { Item } from "./item";
import { PropertyObject } from "./propertyObject";

export class Player extends PropertyObject {
    public name: string = '';
    @Type(() => Item)
    public inventory: Item[] = [];
    public healthPoint: number = 0;
    
    constructor() {
        super();
    }

    public isDead(): boolean {
        return this.healthPoint <= 0;
    } // isDead
    
    public get equipment(): Item[] {
        return this.inventory.filter(i => i.isEquipped);
    } // equipment

    public static load(data: object) {
      return plainToClass(Player, data);
  } // load    
}