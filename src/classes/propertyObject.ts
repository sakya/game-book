import { Type } from "class-transformer";
import { Property } from "./property";

export abstract class PropertyObject {
    @Type(() => Property)
    public properties: Property[] = [];

    public hasProperty(name: string) : boolean {
        return this.getProperty(name) != null;
    } // hasProperty

    public getProperty(name: string): Property | null {
        const props = this.properties.filter(p => p.name == name);
        if (props.length > 0)
            return props[0];
        return null;
    } // getProperty

    public getPropertyValue(name: string): any | null {
        const prop = this.getProperty(name);
        if (prop != null)
            return prop.value;
        return null;
    } // getPropertyValue

    public setProperty(name: string, value: any) {
        let p = this.getProperty(name);
        if (p != null)
            p.value = value;
        else {
            p = new Property(name, value);
            this.properties.push(p);
        }
    } // setProperty
}