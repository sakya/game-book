import { PropertyObject } from "./propertyObject";

export class Stat extends PropertyObject {
  public name: string;
  public description: string = '';
  public minValue: number;
  public maxValue: number; 

  private _value: number = 0;

  constructor(name: string, minValue: number, maxValue: number)
  {
    super();

    this.name = name;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    if (value >= this.minValue && value <= this.maxValue)
      this._value = value;
  }
}