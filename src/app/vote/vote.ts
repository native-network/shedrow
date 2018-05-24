import { User } from "../user/user";
import { Tribe } from "../tribe/tribe";
import { Project } from "../project/project";
import { Task } from "../task/task";

export class Vote {
    slug: string;
    title: string;
    image: string;
    description: string;
    type: string;
    date: Date;
    owner: User;
    voted: SubmittedVote[];
    cost: number;
    tribe: Tribe;
    state: string; // open/closed
    deadline: number;
    relatedProject?: Project;
    relatedTask?: Task;
    options: Array<string>;
  }

  export class SubmittedVote {
    user: User;
    option: string;
  }
