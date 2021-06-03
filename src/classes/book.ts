import { plainToClass, Type } from "class-transformer";
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
    public startPageId: string = '';

    @Type(() => Page)
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

    public getRandomNumber(min: number, max: number) : number {
        return Math.floor(Math.random() * max) + min;
    } // getRandomNumber

    public static load(data: object): Book {
        return plainToClass(Book, data);
    } // load
}