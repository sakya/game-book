import { Player } from "./player";
import { PropertyObject } from "./propertyObject";
export declare abstract class Action {
    type: string;
    text: string;
    enableCondition: string;
    visibleCondition: string;
    script: string;
    constructor(type: string, text: string);
    isEnabled(player: Player): boolean;
    isVisible(player: Player): boolean;
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
