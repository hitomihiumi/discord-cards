import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { LevelUp } from "../types/levelup";

export class LevelUpCard extends Base {
    declare data: any;

    constructor(data?: any) {
        super(data);

        this.data.levelFontSize = [];
    }

    setCurrentLevel(level: number) {
        if (isNaN(level)) throw new Error('[Discord-Cards] Level must be a number');
        this.data.level = level;

        return this;
    }

    setPreviousLevel(level: number) {
        if (isNaN(level)) throw new Error('[Discord-Cards] Level must be a number');
        this.data.previousLevel = level;

        return this;
    }

    setLevelFontSizes(...size: number[]) {
        for (const s of size) {
            if (isNaN(s)) throw new Error('[Discord-Cards] Font size must be a number');
            this.data.levelFontSize.push(s);
        }

        return this;
    }

    setPostion(position: string | number) {
        this.data.position = position;

        return this;
    }

    async render() {
        let data = await loadStyle(this.data.style, 'levelup');

        let image = await renderCard(data, this.data);

        return image;
    }
}