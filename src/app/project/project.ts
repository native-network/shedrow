import { User } from "../user/user";
import { Tribe } from "../tribe/tribe";


export class Project {
  slug: string;
  title: string;
  image: string;
  description: string;
  type: string;
  date: Date;
  tags: string;
  owner: User;
  contributed: User[]; // needed now?
  cost: number;
  fundedValue: number; // needed now?
  funded: boolean;
  tribe: Tribe;
  state: string;  // idea/ready to act/completed
  deadline: number;
  supported: User[];
}
