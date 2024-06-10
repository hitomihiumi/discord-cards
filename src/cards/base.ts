import { Font, isImageUrlValid } from "@hitomihiumi/lazy-canvas";

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
        this.data.textColor = color;

        return this;
    }

    setName(name: string) {
        this.data.name = name;

        return this;
    }
}