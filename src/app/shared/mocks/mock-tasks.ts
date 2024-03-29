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
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 2,
    tribe: TRIBES[2],
    state: "open",
  },
  {
    slug: "task-02",
    title: "Script Review",
    image: "assets/project-01.png",
    description: "Review and rate the script of one of our films.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 25,
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 3,
    tribe: TRIBES[2],
    state: "open",
  },
  {
    slug: "eg-task-architect",
    title: "App Architect",
    image: "assets/tribes/eg_task_architect.png",
    description: "Help us design and develop the Earth Guardian App!",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 7000,
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 1,
    tribe: TRIBES[0],
    state: "open",
  },
  {
    slug: "eg-task-social",
    title: "Social Media Campaign Launch",
    image: "assets/tribes/eg_task_social.png",
    description: "Amplify the Earth Guardian rallying cry by running a social media campaign to launch the new Earth Guardian App.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 3000,
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 1,
    tribe: TRIBES[0],
    state: "open",
  },
  {
    slug: "cc-task-curator",
    title: "City Curator",
    image: "assets/tribes/cc_curator.png",
    description: "Set up a Cloud Collective in your town. The reward is granted when you reach 100 members signed up from your town.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 40000,
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 1,
    tribe: TRIBES[1],
    state: "open",
  },
  {
    slug: "cc-task-funrun",
    title: "Cloud Collective Fun Run Volunteer",
    image: "assets/tribes/cc_funrun.png",
    description: "Come help us run our October Fun Run.",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    reward: 100,
    workHistories: [],
    approvedBy: null,
    claimedBy: null,
    submittedBy: null,
    deadline: 1,
    tribe: TRIBES[1],
    state: "open",
  },
  ]
