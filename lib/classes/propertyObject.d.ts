import "reflect-metadata";
import { Property } from "./property";
export declare abstract class PropertyObject {
    properties: Property[];
    getProperty(name: string): Property | null;
    setProperty(name: string, value: any): void;
}
