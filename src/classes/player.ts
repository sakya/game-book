import { Item } from "./item";

export class Player {
    public name: string = '';
    public inventory: Item[] = [];
    public healthPoint: number = 0;

    constructor() {
    }

    public isDead(): boolean {
        return this.healthPoint <= 0;
    } // isDead
    
    public get equipment(): Item[] {
        return this.inventory.filter(i => i.isEquipped);
    } // equipment
}