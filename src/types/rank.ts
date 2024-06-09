import { Font } from '@hitomihiumi/lazy-canvas';

export interface Rank {
    name: string;
    xp: number;
    neededXp: number;
    level: number;
    nextLevel: number;
    avatar: string;

    // Optional
    totalXp?: number;
    totalLevels?: number;
    background?: string;
    progressColor?: string;
    textColor?: string;
    font?: Font;
}