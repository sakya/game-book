import { Page } from "./page";

export class Book {
    public serie: string = '';
    public index: number = 0;
    public title: string = '';
    public author: string = '';

    public pages: Page[] = [];
    
    constructor() {
    }
}