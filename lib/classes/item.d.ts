import { Player } from "./player";
import { PropertyObject } from "./propertyObject";
export declare class Item extends PropertyObject {
    id: string;
    type: string;
    name: string;
    description: string;
    image: string;
    isEquipped: boolean;
    equipLocations: string[];
    useScript: string;
    constructor(id: string);
    get canBeEquipped(): boolean;
    get canBeUsed(): boolean;
    /**
     * Run the useScript
     * @param player The player
     * @returns An optional message to display to the user
     */
    use(player: Player): string | null;
}
