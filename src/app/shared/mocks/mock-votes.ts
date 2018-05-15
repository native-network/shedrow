import { Vote } from '../../vote/vote';
import { USERS } from './mock-users';
import { TRIBES } from './mock-tribes';

export const VOTES: Vote[] = [
  {
    slug: "vote-01",
    title: "Choose the next Imaginal Film",
    image: "assets/project-01.png",
    description: "Together we choose the films that we feel will make the greatest impact and the right return on investment.",
    type: "Member Vote",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    voted: [],
    cost: 1,
    tribe: TRIBES[2],
    state: 'open',
    options: [
      'vote option number one',
      'vote options number two',
    ],
  },
  {
    slug: "vote-02",
    title: "Protect Our Future Campaigns",
    image: "assets/tribes/earth_vote.png",
    description: "Help us decide what we should base this year's campaigns around! You decide the kinds of actions our global community of young leaders will be instigating and leading this year.",
    type: "Member Vote",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    voted: [],
    cost: 1,
    tribe: TRIBES[0],
    state: 'open',
    options: [
      'vote option number one',
      'vote options number two',
    ],
  },
  {
    slug: "vote-03",
    title: "Opioid Misuse Prevention Colorado Health Bill 18-1003",
    image: "assets/tribes/cc_opioid.png",
    description: "Should we support Colorado Health Bill 18-1003 or not?",
    type: "Member Vote",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    voted: [],
    cost: 1,
    tribe: TRIBES[1],
    state: 'open',
    options: [
      'Yes, support the bill',
      'No, do not support the bill',
    ],
  },
  ]
