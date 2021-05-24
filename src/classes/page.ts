import { Type } from "class-transformer";
import { Player } from "./player";
import { PropertyObject } from "./propertyObject";

export abstract class Action {
    public type: string;
    public text: string;
    public enableCondition: string = '';
    public visibleCondition: string = '';
    public script: string = '';

    constructor(type: string, text: string) {
        this.type = type;
        this.text = text;
    }

    public isEnabled(player: Player) : boolean {
        if (this.enableCondition && this.enableCondition.length > 0) {
            const body = `let player = arguments[0];
                          ${this.enableCondition}`;
            var func = new Function(body);
            return func.call(null, player);
        }
        return true;
    } // isEnabled

    public isVisible(player: Player) : boolean {
      if (this.visibleCondition && this.visibleCondition.length > 0) {
          const body = `let player = arguments[0];
                        ${this.visibleCondition}`;
          var func = new Function(body);
          return func.call(null, player);
      }
      return true;
    } // isVisible

    public runScript(player: Player) : void {
      if (this.script && this.script.length > 0) {
          const body = `let player = arguments[0];
                        ${this.script}`;
          var func = new Function(body);
          return func.call(null, player);
      }
    } // runScript    
} // Action

export class LinkAction extends Action {
    public pageId: string = '';

    constructor(text: string, pageId: string) {
        super("LinkAction", text);

        this.pageId = pageId;
    }
} // LinkAction

export class Page extends PropertyObject {
    public id: string = '';
    public text: string = '';
    @Type(() => Action)
    public actions: Action[] = [];

    constructor() {
        super();
    }
} // Page