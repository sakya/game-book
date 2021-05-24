import { Item } from "./item";
import { PropertyObject } from "./propertyObject";
export declare class Player extends PropertyObject {
    name: string;
    inventory: Item[];
    equipmentSlots: string[];
    healthPoint: number;
    constructor();
    isDead(): boolean;
    getItem(itemId: string): Item | null;
    hasItem(itemId: string): boolean;
    addItemToInventory(item: Item): void;
    removeItemFromInventory(itemId: string): boolean;
    equipItem(itemId: string): boolean;
    unequipItem(itemId: string): boolean;
    get equipment(): Item[];
    static load(data: object): Player;
}
