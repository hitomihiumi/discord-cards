import { Font, isImageUrlValid, isValidColor } from "@hitomihiumi/lazy-canvas";

export class Base {
    data: any;

    constructor(data: any) {
        this.data = { ...data }
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

    setTextColor(color: string) {
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

    setDecorationColor(color: string) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.decorationColor = color;

        return this;
    }

    setBorderColor(color: string) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.borderColor = color;

        return this;
    }
}