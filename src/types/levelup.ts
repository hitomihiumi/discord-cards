import { Font } from '@hitomihiumi/lazy-canvas';

export interface LevelUp {
    name: string;
    level: number;
    avatar: string;
    levelFontSize: number[];

    // Optional
    font?: Font;
    position?: string | number;
    background?: string;
    textColor?: string;
    decorationColor?: string;
}