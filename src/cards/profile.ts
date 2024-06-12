import { LazyCanvas, isValidColor } from "@hitomihiumi/lazy-canvas";
import { loadStyle, dataReplace } from "../utils";
import { Base } from "./base";
import { Profile } from "../types/profile";

export class ProfileCard extends Base {
    declare data: any;

    constructor(data?: any) {
        super(data);
    }

    setLevel(level: number) {
        if (isNaN(level)) throw new Error('[Discord-Cards] Level must be a number');
        this.data.level = level;

        return this;
    }

    setLevelFontSize(size: number) {
        if (isNaN(size)) throw new Error('[Discord-Cards] Font size must be a number');
        this.data.levelFontSize = size;

        return this;
    }

    setCurrentXp(xp: number) {
        if (isNaN(xp)) throw new Error('[Discord-Cards] XP must be a number');
        this.data.xp = xp;

        return this;
    }

    setNeededXp(xp: number) {
        if (isNaN(xp)) throw new Error('[Discord-Cards] Needed XP must be a number');
        this.data.neededXp = xp;

        return this;
    }

    setProgressColor(color: string) {
        if (!isValidColor(color)) throw new Error('[Discord-Cards] Invalid color');
        this.data.progressColor = color;

        return this;
    }

    setNextLevel(level: number) {
        if (isNaN(level)) throw new Error('[Discord-Cards] Next level must be a number');
        this.data.nextLevel = level;

        return this;
    }

    setTotalXp(xp: number) {
        if (isNaN(xp)) throw new Error('[Discord-Cards] Total XP must be a number');
        this.data.totalXp = xp;

        return this;
    }

    setStyle(style: string) {
        this.data.style = style;

        return this;
    }

    setBiography(biography: string) {
        this.data.biography = biography;

        return this;
    }

    setPosition(position: string | number) {
        this.data.position = position;

        return this;
    }

    async render() {
        let data = await loadStyle(this.data.style, 'profile');

        data.data.layers.forEach((layer: any) => {
            switch (layer.type) {
                case 'text':
                    if (this.data.font?.family) layer.font = this.data.font.family;
                    if (this.data.font?.weight) layer.weight = this.data.font.weight;
                    if (this.data.textColor) layer.color = this.data.textColor;
                    layer.size = dataReplace(layer.size, this.data);
                    layer.text = dataReplace(layer.text, this.data);
                    break;
                case 'ellipseimage' || 'image':
                    layer.image = dataReplace(layer.image, this.data);
                    break;
                default:
                    layer.color = dataReplace(layer.color, this.data);
                    layer.width = eval(dataReplace(layer.width, this.data));
                    break;
            }
        })

        let image = await new LazyCanvas().setData(data.data).loadFonts(this.data.font).renderImage()

        return image;
    }
}