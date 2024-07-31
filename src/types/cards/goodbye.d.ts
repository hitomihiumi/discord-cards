import { Base } from "./base";

export interface Goodbye extends Base {
    guild: {
        name: string;
        avatar?: string;
    }
}