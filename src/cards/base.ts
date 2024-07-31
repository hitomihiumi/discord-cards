import { Font, isImageUrlValid, isValidColor, Gradient, Pattern } from "@hitomihiumi/lazy-canvas";
import { Card } from "../types/card";

export class Base {
    data: Card;

    constructor(data?: Card) {
        this.data = data ? { ...data } : {} as Card;

        this.data.style = 'base';
    }

    setAvatar(url: string) {
        if (!isImageUrlValid(url)) throw new Error('[Discord-Cards] Invalid URL');
        this.data.avatar = url;

        return this;
    }

    setBackground(background: string) {
        this.data.background = background;

        return this;
    }

    setFont(font: Font) {
        this.data.font = font;

        return this;
    }

    setTextColor(color: string | Gradient | Pattern) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.textColor = color;

        return this;
    }

    setName(name: string) {
        this.data.name = name;

        return this;
    }

    setStyle(style: string) {
        this.data.style = style;

        return this;
    }

    setDecorationColor(color: string | Gradient | Pattern) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.decorationColor = color;

        return this;
    }

    setBorderColor(color: string | Gradient | Pattern) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.borderColor = color;

        return this;
    }
}