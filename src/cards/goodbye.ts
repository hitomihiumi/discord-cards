import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { Card } from "../types/card";

/**
 * @example
 * import { GoodbyeCard, fonts } from "@hitomihiumi/discord-cards";
 * import { saveFile } from "@hitomihiumi/lazy-canvas";
 *
 * const card = new GoodbyeCard()
 *     .setName('Hitomi')
 *     .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *     .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg')
 *     .setFont(fonts.opensansBold)
 *     .setStyle('base')
 *     .setBorderColor('#fff')
 *     .setTextColor('#fff')
 *     .setGuild('Test');
 *
 * async function main() {
 *     let canvas = await card.render();
 *     console.log(canvas);
 *
 *     saveFile(canvas, 'png', 'test');
 * }
 */

export class GoodbyeCard extends Base {
    constructor(data?: Card) {
        super(data);
    }

    setGuild(name: string, avatar?: string) {
        this.data.guild = { name, avatar };
        return this;
    }

    async render() {
        let data = await loadStyle(this.data.style, 'goodbye');

        let image = await renderCard(data, this.data);

        return image;
    }
}