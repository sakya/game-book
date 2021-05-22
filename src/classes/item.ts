export class Item {
    public id: string;
    public name: string = '';
    public description: string = '';
    public isEquipped: boolean = false;

    constructor(id: string) {
        this.id = id;
    }
}