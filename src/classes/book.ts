import { Page } from "./page";
import { PropertyObject } from "./propertyObject";

export class Book extends PropertyObject {
    public id: string = '';
    public serie: string = '';
    public index: number = 0;
    public title: string = '';
    public authors: string[] = [];
    public illustrators: string[] = [];
    public publisher: string = '';
    public version: string = '';

    public pages: Page[] = [];

    constructor() {
        super();
        
    }

    public getPage(id: string) : Page | null {
        const p = this.pages.filter(p => p.id == id);
        if (p.length > 0)
            return p[0];
        return null;
    } // getPage
}