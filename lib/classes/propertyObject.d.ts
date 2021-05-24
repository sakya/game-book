import { Property } from "./property";
export declare abstract class PropertyObject {
    properties: Property[];
    hasProperty(name: string): boolean;
    getProperty(name: string): Property | null;
    getPropertyValue(name: string): any | null;
    setProperty(name: string, value: any): void;
}
