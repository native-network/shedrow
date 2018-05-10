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
    voters: USERS,
    cost: 1,
    votedValue: 35,
    voted: false,
    tribe: TRIBES[2],
    options: [
      {
        label: 'vote option number one',
      },
      {
        label: 'vote options number two',
      },
    ],
  },
  {
    slug: "vote-02",
    title: "Choose the next thing",
    image: "assets/project-01.png",
    description: "Together we choose the films that we feel will make the greatest impact and the right return on investment.",
    type: "Member Vote",
    date: new Date('September 17, 2018 03:24:00'),
    owner: USERS[0],
    voters: USERS,
    cost: 1,
    votedValue: 35,
    voted: false,
    tribe: TRIBES[1],
    options: [
      {
        label: 'vote option number one',
      },
      {
        label: 'vote options number two',
      },
    ],
  },
  ]
