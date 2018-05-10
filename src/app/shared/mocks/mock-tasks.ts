import { Task } from '../../task/task';
import { USERS } from './mock-users';
import { TRIBES } from './mock-tribes';

export const TASKS: Task[] = [
  {
    slug: "task-01",
    title: "Budget Analysis",
    image: "assets/project-01.png",
    description: "Review and rate the budget of one of our films.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 35,
    claimed: false,
    claimedBy: null,
    deadline: 1,
    tribe: TRIBES[2],
  },
  {
    slug: "task-02",
    title: "Script Review",
    image: "assets/project-01.png",
    description: "Review and rate the script of one of our films.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 25,
    claimed: false,
    claimedBy: null,
    deadline: 1,
    tribe: TRIBES[2],
  },
  ]
