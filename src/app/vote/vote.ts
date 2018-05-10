import { User } from "../user/user";
import { Tribe } from "../tribe/tribe";

export class Vote {
    slug: string;
    title: string;
    image: string;
    description: string;
    type: string;
    date: Date;
    owner: User;
    voters: User[];
    cost: number;
    votedValue: number;
    voted: boolean;
    tribe: Tribe;
    options: [
      {
        label: string;
      }
    ];
  }
