import { User } from "../user/user";
import { Tribe } from "../tribe/tribe";

export class Task {
    slug: string;
    title: string;
    image: string;
    description: string;
    date: Date;
    owner: User;
    reward: number;
    claimed: boolean;
    claimedBy: User;
    deadline: number;
    tribe: Tribe;
    state: string;  // open/claimed/pending approval/finished  
  }
