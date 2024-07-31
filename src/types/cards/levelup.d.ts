import { Base } from "./base";

export interface Levelup extends Base  {
    level: number;
    previousLevel: number;
    levelFontSizes: Array<number>;

    // Optional
    position?: string | number;
}