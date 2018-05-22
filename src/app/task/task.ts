import { User } from "../user/user";
import { Tribe } from "../tribe/tribe";

export class WorkHistory {
  date: Date;
  comment: string;
  user: User;
}

export class Task {
    slug: string;
    title: string;
    image: string;
    description: string;
    date: Date;
    owner: User;
    reward: number;
    workHistories: WorkHistory[];    
    claimedBy: User;
    approvedBy: User;
    submittedBy: User;
    deadline: number;
    tribe: Tribe;
    state: string;  // open/claimed/pending approval/finished  
  }
