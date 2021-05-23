import { PropertyObject } from "./propertyObject";

export abstract class Action {
    public type: String;
    public text: String;

    constructor(type: string, text: string) {
        this.type = type;
        this.text = text;
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