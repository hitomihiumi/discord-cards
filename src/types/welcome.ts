import { Font } from "@hitomihiumi/lazy-canvas";

export interface Welcome {
    name: string;
    avatar: string;
    background: string;

    // Optional
    font?: Font;
    textColor?: string;
    decorationColor?: string;
    borderColor?: string;
}