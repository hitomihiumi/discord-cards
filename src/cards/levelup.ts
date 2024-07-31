import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { Card } from "../types/card";

/**
 * @example
 * import { LevelUpCard, fonts } from "@hitomihiumi/discord-cards";
 * import { saveFile } from "@hitomihiumi/lazy-canvas";
 *
 * const card = new LevelUpCard()
 *     .setName("Hitomi")
 *     .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *     .setBackground('https://cs12.pikabu.ru/post_img/big/2021/09/16/10/1631813426193895567.png')
 *     .setStyle('base')
 *     .setFont(fonts.opensansBold)
 *     .setCurrentLevel(2)
 *     .setPreviousLevel(1)
 *     .setLevelFontSizes(50, 50)
 *
 * async function main() {
 *     let canvas = await card.render();
 *     console.log(canvas);
 *
 *     saveFile(canvas, 'png', 'test');
 * }
 */

export class LevelUpCard extends Base {

    constructor(data?: Card) {
        super(data);
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
            this.data.levelFontSizes.push(s);
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