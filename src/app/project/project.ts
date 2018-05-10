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
  contributed: User[];
  cost: number;
  fundedValue: number;
  funded: boolean;
  tribe: Tribe;
}
