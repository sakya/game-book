import { Player } from "./player";
import { PropertyObject } from "./propertyObject";

export abstract class Action {
    public type: string;
    public text: string;
    public enableCondition: string = '';

    constructor(type: string, text: string) {
        this.type = type;
        this.text = text;
    }

    public isEnabled(player: Player) : boolean {
        if (this.enableCondition && this.enableCondition.length > 0) {
            var func = new Function(this.enableCondition);
            return func.call(player);
        }
        return true;
    }
} // Action

export class LinkAction extends Action {
    public pageId: string = '';

    constructor(text: string, pageId: string) {
        super("LinkAction", text);

        this.pageId = pageId;
    }
} // LinkAction

export class Page extends PropertyObject {
    public id: string = '';
    public text: string = '';
    public actions: Action[] = [];

    constructor() {
        super();
    }
} // Page