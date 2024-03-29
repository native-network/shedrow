import { Project } from '../../project/project';
import { USERS } from './mock-users';
import { TRIBES } from './mock-tribes';

export const PROJECTS: Project[] = [
  {
    slug: "eg-africa-office",
    title: "EG Africa Office, Togo",
    image: "assets/tribes/earth_togo.png",
    description: "Mensa and his crews know it is imperative to interact with as many youth on the continent as possible -- working with them at both national and local levels, in schools and communities. Mensa has seen the number of Earth Guardians grow outstandingly in Africa and, therefore, is working to create a stronger support network of local Earth Guardian leaders. He needs 50,000 EGT to open an EG office in Lome, Togo to support his work. This will cover the space, office equipment, and internet...the necessary office infrastructure. Now that Earth Guardians Africa is officially recognized by the government, Togo government officials will do a site check in either May or June. Help Mensa plant down roots for this local community by preparing a proper Earth Guardians office in time for the government visit!",
    type: "EVENT",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "Infrastructure",
    owner: USERS[0],
    contributed: USERS,
    cost: 50000,
    fundedValue: 35,
    funded: false,
    tribe: TRIBES[0],
    state: "idea",
    deadline: 12,
    supported: USERS.slice(0, USERS.length - 8),
  },
  {
    slug: "eg-dc-youth",
    title: "DC National Youth Council",
    image: "assets/tribes/earth_dc_youth.png",
    description: "Earth Guardians is launching a powerful one-week training program! We are assembling top trainers to provide leadership training to our 22 young council leaders from around the country. They will be taught how to spearhead key national campaigns that have political weight through effective action both in the streets and in the courts. We aim to strengthen a powerful youth movement for years to come. This program will also enable us to bring in the knowledge of world-renowned trainers including Jacques Servin from the Yes Men and Joshua Kahn Russell, a core trainer with the Ruckus Society.For the last 9 months, the Council has been working within the collaborative structure that they developed in 2017 and are now ready to step up into their power to create real change through action and scale.",
    type: "EVENT",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "string",
    owner: USERS[0],
    contributed: USERS,
    cost: 210000,
    fundedValue: 65,
    funded: false,
    tribe: TRIBES[0],
    state: "idea",
    deadline: 14,
    supported: USERS.slice(0, USERS.length - 7),
  },
  {
    slug: "eg-app",
    title: "Earth Guardians App",
    image: "assets/tribes/earth_app.png",
    description: "An app to track the positive impact we are having on a global scale! The Earth Guardians App will record Earth Guardian’s individual and collective actions to preserve and protect our life giving systems, such as logging actions taken to reduce our carbon footprints. By highlighting simple, impactful actions we will foster a global shift in attitudes and behaviors. We believe that no action is too small and by changing our habits and honoring the earth we can help turn the tide on some of the biggest issues we face as a global community.",
    type: "Development",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "string",
    owner: USERS[0],
    contributed: USERS,
    cost: 750000,
    fundedValue: 35,
    funded: false,
    tribe: TRIBES[0],
    state: "idea",
    deadline: 30,
    supported: USERS.slice(0, USERS.length - 5),
  },
  {
    slug: "cc-fitness",
    title: "Fitness Challenge",
    image: "assets/tribes/cc_fitness.png",
    description: "Let’s launch a city wide fitness challenge.  Use of funds include the administration of the challenge, verification, marketing, and setup and running of a awards ceremony in North Boulder Park.",
    type: "EVENT",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "string",
    owner: USERS[0],
    contributed: USERS,
    cost: 1780,
    fundedValue: 1,
    funded: false,
    tribe: TRIBES[1],
    state: "idea",
    deadline: 3,
    supported: USERS.slice(0, USERS.length - 9),
  },
  {
    slug: "cc-food",
    title: "Food Sensitivity Lab Test",
    image: "assets/tribes/cc_food.png",
    description: "We send out blood for food allergy testing to four different labs.  Let’s come together to determine which is the best, most accurate lab!  We will conduct our own study into which labs return the most consistent results.",
    type: "Test",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "string",
    owner: USERS[0],
    contributed: USERS,
    cost: 3500,
    fundedValue: 1,
    funded: false,
    tribe: TRIBES[1],
    state: "idea",
    deadline: 5,
    supported: USERS.slice(0, USERS.length - 8),
  },
  {
    slug: "cc-csa",
    title: "Community Supported Agriculture (CSA)",
    image: "assets/tribes/cc_csa.png",
    description: "We all know that you are what you eat...and we’re a conscious community committed to living healthy, active, and thriving lives. It’s time to eat like it! Let’s come together to launch our own CSA so that we can nourish our bodies and live in harmony with our planet.",
    type: "Launch",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "string",
    owner: USERS[0],
    contributed: USERS,
    cost: 15000,
    fundedValue: 1,
    funded: false,
    tribe: TRIBES[1],
    state: "idea",
    deadline: 10,
    supported: USERS.slice(0, USERS.length - 8),
  },
  {
    slug: "antidote",
    title: "Antidote",
    image: "assets/tribes/antidote_header.png",
    description: "Overdose is a slow way to suicide. A cynical young woman freed from her dying body must travel the world to find redemption in the beauty of life or die alone in dark resignation.",
    type: "FEATURE FILM",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "Film",
    owner: USERS[0],
    contributed: USERS,
    cost: 120,
    fundedValue: 35,
    funded: false,
    tribe: TRIBES[2],
    state: "idea",
    deadline: 6,
    supported: USERS.slice(0, USERS.length - 6),
  },
  {
    slug: "reson8",
    title: "Reson8",
    image: "assets/tribes/reson8_header.png",
    description: "Resonate is a film about the extraordinary power of sound expressed through music and dance.  The film examines how individuals, communities, indigenous cultures and spiritual traditions use this power to bring about transformation on many levels.",
    type: "FEATURE DOCUMENTARY",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "Film",
    owner: USERS[0],
    contributed: USERS,
    cost: 320,
    fundedValue: 35,
    funded: false,
    tribe: TRIBES[2],
    state: "idea",
    deadline: 12,
    supported: USERS.slice(0, USERS.length - 7),
  },
  {
    slug: "origami-moon",
    title: "Origami Moon",
    image: "assets/tribes/origami_header.png",
    description: "Wren is pulled into a fight to save the world he has turned his back on only to discover the cosmic joke at the root of the struggle. Now with a mind awakened by the fire of true realty he must architect the greatest con in the history of war.",
    type: "FEATURE FILM",
    date: new Date('September 17, 2018 03:24:00'),
    tags: "Film",
    owner: USERS[0],
    contributed: USERS,
    cost: 910,
    fundedValue: 90,
    funded: false,
    tribe: TRIBES[2],
    state: "idea",
    deadline: 2,
    supported: USERS.slice(0, USERS.length - 5),
  },
  ]
