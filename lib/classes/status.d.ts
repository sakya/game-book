import { Player } from "./player";
export declare class Status {
    bookFile: string;
    bookPageId: string;
    player: Player | null;
    constructor();
    get bookFolder(): string | null;
    static load(data: object): Status;
}
