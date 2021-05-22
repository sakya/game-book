import { Page } from "./page";

export class Book {
    public serie: string = '';
    public index: number = 0;
    public title: string = '';
    public authors: string[] = [];
    public illustrators: string[] = [];
    public publisher: string = '';
    public version: string = '';

    public pages: Page[] = [];

    constructor() {
        
    }
}