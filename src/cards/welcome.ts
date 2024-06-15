import { loadStyle, renderCard } from "../utils";
import { Base } from "./base";
import { Welcome } from "../types/welcome";

export class WelcomeCard extends Base {
    declare data: any;

    constructor(data?: any) {
        super(data);
    }

    setGuild(name: string, avatar?: string) {
        this.data.guild = { name, avatar };
        return this;
    }

    async render() {
        let data = await loadStyle(this.data.style, 'welcome');

        let image = await renderCard(data, this.data);

        return image;
    }
}