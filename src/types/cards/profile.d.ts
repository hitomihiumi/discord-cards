import { Gradient, Pattern } from "@hitomihiumi/lazy-canvas";
import { Base } from "./base";

export interface Profile extends Base  {
    xp: number;
    neededXp: number;
    level: number;
    nextLevel: number;
    levelFontSize: number;

    // Optional
    totalXp?: number;
    totalLevels?: number;
    biography?: string;
    position?: string | number;
    progressColor?: string | Gradient | Pattern;
}