import { Player } from "./player";
import { PropertyObject } from "./propertyObject";

export class Item extends PropertyObject {
    public id: string;
    public type: string = '';
    public name: string = '';
    public description: string = '';
    public image: string = '';
    public isEquipped: boolean = false;
    public equipLocations: string[] = [];
    public useScript: string = '';

    constructor(id: string) {
        super();
        this.id = id;
    }

    public get canBeEquipped(): boolean {
      return this.equipLocations?.length > 0;
    } // canBeEquipped

    public get canBeUsed(): boolean {
      return this.useScript?.length > 0;
    } // canBeUsed

    /**
     * Run the useScript
     * @param player The player
     * @returns An optional message to display to the user
     */
    public use(player: Player): string | null {
      if (this.useScript && this.useScript.length > 0) {
        const body = `let item = arguments[0]
                      let player = arguments[1];
                          ${this.useScript}`;
        var func = new Function(body);
        return func.call(null, this, player);
      }
      return null;
    } // use
} // Item