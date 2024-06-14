import { Font } from "@hitomihiumi/lazy-canvas";

export interface Goodbye {
    name: string;
    avatar: string;
    background: string;

    // Optional
    font?: Font;
    textColor?: string;
    decorationColor?: string;
    borderColor?: string;
}