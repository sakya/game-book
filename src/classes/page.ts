import { PropertyObject } from "./propertyObject";

export abstract class Action {
    public text: String;

    constructor(text: string) {
        this.text = text;
    }
} // Action

export class LinkAction extends Action {
    public PageId: string = '';

    constructor(text: string, pageId: string) {
        super(text);

        this.PageId = pageId;
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