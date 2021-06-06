import { Player } from "./player";
import { PropertyObject } from "./propertyObject";
export declare abstract class Action {
    type: string;
    text: string;
    enableCondition: string;
    visibleCondition: string;
    script: string;
    constructor(type: string, text: string);
    /**
     * Run the enableCondition
     * @param player The player
     * @returns A boolean value
     */
    isEnabled(player: Player): boolean;
    /**
     * Run the visibleCondition
     * @param player The player
     * @returns A boolean value
     */
    isVisible(player: Player): boolean;
    /**
     * Run the script
     * @param player The player
     * @returns
     */
    runScript(player: Player): void;
}
export declare class LinkAction extends Action {
    pageId: string;
    constructor(text: string, pageId: string);
}
export declare class Page extends PropertyObject {
    id: string;
    text: string;
    actions: Action[];
    constructor();
}
