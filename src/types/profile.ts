import { Font } from '@hitomihiumi/lazy-canvas';

export interface Profile {
    name: string;
    xp: number;
    neededXp: number;
    level: number;
    nextLevel: number;
    avatar: string;
    levelFontSize: number;

    // Optional
    totalXp?: number;
    totalLevels?: number;
    background?: string;
    progressColor?: string;
    textColor?: string;
    font?: Font;
    biography?: string;
    position?: string;
}