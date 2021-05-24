import { plainToClass, Type } from "class-transformer";
import { Item } from "./item";
import { PropertyObject } from "./propertyObject";

export class Player extends PropertyObject {
    public name: string = '';
    @Type(() => Item)
    public inventory: Item[] = [];
    public equipmentSlots: string[] = [];
    public healthPoint: number = 0;
    
    constructor() {
        super();
    }

    public isDead(): boolean {
        return this.healthPoint <= 0;
    } // isDead

    public getItem(itemId: string) : Item | null {
      var i = this.inventory.filter(i => i.id == itemId);
      if (i.length > 0)
        return i[0];
      return null;
    } // getItem

    public hasItem(itemId: string) {      
      return this.getItem(itemId) != null;
    } // hasItem

    public addItemToInventory(item: Item) {
      if (!this.hasItem(item.id))
        this.inventory.push(item);
    } // addItemToInventory

    public removeItemFromInventory(itemId: string): boolean {
      var i = this.getItem(itemId);
      if (i != null) {
        const idx = this.inventory.indexOf(i);
        this.inventory.splice(idx, 1);
      }
        
      return false;
    } // removeItemFromInventory

    public equipItem(itemId: string): boolean {
      let i = this.getItem(itemId);
      if (i != null && i.canBeEquipped && !i.isEquipped) {
        const slots  = [...this.equipmentSlots];
        for (let ei of this.equipment) {
          const idx = slots.indexOf(ei.equipLocation);
          if (idx != -1)
            slots.splice(idx, 1);
        }

        if (slots.indexOf(i.equipLocation) != -1) {
          i.isEquipped = true;
          return true;
        }
      }
      return false;
    } // equipItem

    public unequipItem(itemId: string): boolean {
      let i = this.getItem(itemId);
      if (i != null && i.isEquipped) {
        i.isEquipped = false;
        return true;
      }
      return false;
    } // unequipItem

    public get equipment(): Item[] {
        return this.inventory.filter(i => i.isEquipped);
    } // equipment

    public static load(data: object) {
      return plainToClass(Player, data);
  } // load    
}