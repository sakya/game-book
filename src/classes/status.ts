import { plainToClass, Type } from "class-transformer";
import { Player } from "./player";

export class Status {
    public bookFile: string = '';
    public bookPageId: string = '';
    @Type(() => Player)
    public player: Player | null = null;
    
    constructor() {

    }

    public get bookFolder(): string | null {
        if (this.bookFile) {
            const idx = this.bookFile.lastIndexOf('/');
            if (idx != -1) 
                return this.bookFile.substr(0, idx + 1);
        }
        return null;
    } // bookFolder

    public static load(data: object): Status {
        return plainToClass(Status, data);
    } // load
}