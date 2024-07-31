import { Base } from "./base";
import { Gradient, Pattern } from "@hitomihiumi/lazy-canvas";

export interface Rank extends Base  {
    xp: number;
    neededXp: number;
    level: number;
    nextLevel: number;
    levelFontSize: number;

    // Optional
    totalXp?: number;
    totalLevels?: number;
    position?: string | number;
    progressColor?: string | Gradient | Pattern;
}