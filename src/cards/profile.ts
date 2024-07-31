import { isValidColor } from "@hitomihiumi/lazy-canvas";
import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { Card } from "../types/card";

/**
 * @example
 * import { ProfileCard, fonts } from "@hitomihiumi/discord-cards";
 * import { saveFile } from "@hitomihiumi/lazy-canvas";
 *
 * const card = new ProfileCard()
 *     .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *     .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg')
 *     .setLevel(1)
 *     .setCurrentXp(100)
 *     .setNeededXp(200)
 *     .setProgressColor('#7289da')
 *     .setTextColor('#ffffff')
 *     .setStyle('base')
 *     .setName('Hitomi')
 *     .setFont(fonts.opensansBold)
 *     .setPosition('#1')
 *     .setBiography('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.');
 *
 *
 * async function main() {
 *     let canvas = await card.render();
 *     console.log(canvas);
 *
 *     saveFile(canvas, 'png', 'test');
 * }
 */

export class ProfileCard extends Base {

    constructor(data?: Card) {
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

        let image = await renderCard(data, this.data);

        return image;
    }
}