import { Goodbye } from "./cards/goodbye";
import { Levelup } from "./cards/levelup";
import { Profile } from "./cards/profile";
import { Rank } from "./cards/rank";
import { Welcome } from "./cards/welcome";

export interface Card extends Profile, Rank, Levelup, Welcome, Goodbye {}