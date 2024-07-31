import { Font, Gradient, Pattern } from "@hitomihiumi/lazy-canvas";

export interface Base {
    style: string;
    avatar: string;
    name: string
    background: string;
    font: Font;
    textColor: string | Gradient | Pattern;
    decorationColor: string | Gradient | Pattern;
    borderColor: string | Gradient | Pattern;
}