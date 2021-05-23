import { PropertyObject } from "./propertyObject";
export declare abstract class Action {
    type: String;
    text: String;
    constructor(type: string, text: string);
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
