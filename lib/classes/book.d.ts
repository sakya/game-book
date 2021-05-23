import { Page } from "./page";
import { PropertyObject } from "./propertyObject";
export declare class Book extends PropertyObject {
    id: string;
    serie: string;
    index: number;
    title: string;
    authors: string[];
    illustrators: string[];
    publisher: string;
    version: string;
    pages: Page[];
    constructor();
}
