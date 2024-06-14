import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { Goodbye } from "../types/goodbye";

export class GoodbyeCard extends Base {
    declare data: any;

    constructor(data: any) {
        super(data);
    }

    async render() {
        let data = await loadStyle(this.data.style, 'goodbye');

        let image = await renderCard(data, this.data);

        return image;
    }
}