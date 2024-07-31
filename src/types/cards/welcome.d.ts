import { Base } from "./base";

export interface Welcome extends Base {
    guild: {
        name: string;
        avatar?: string;
    }
}