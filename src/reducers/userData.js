import { MODIFY_USER_INFO } from '../actions';

export const initialState = {
  isConnected: true,
  dataUser: {
    id: '181',
    firstname: 'Patrick',
    lastname: 'Lebon',
    email: 'vrocher@tiscali.fr',
    status: 'Prof',
    biograhy: 'Enim ipsum inventore sed libero et velit qui suscipit. Deserunt laudantium quibusdam enim nostrum soluta qui ipsam non. Velit reiciendis aperiam et fuga.',
  },
  dataStructure: [
    {
      id: 68,
      name: 'Peltier  dMillet SARL',
      city: 'Lejeune',
      sector: 'Le pouvoir de concrétiser vos projets à l\'état pur'
    },
    {
      id: 70,
      name: 'Peron',
      city: 'SchmittBourg',
      sector: 'La liberté d\'avancer sans soucis',
    },
  ],
  dashboard: {
    publishedInterviews: [
      {
        id: 61,
        title: 'Nesciunt voluptas et aut. Reiciendis velit voluptas molestiae eum et eos.',
        categories: [477],
        publish: true,
      },
      {
        id: 63,
        title: 'Corrupti cum ratione animi maxime enim.',
        categories: [487, 488],
        publish: true,
      },
    ],
    writtingInterviews: [
      {
        id: 62,
        title: 'Et quasi incidunt rerum ex accusamus.',
        categories: [482],
        publish: false,
      },
      {
        id: 64,
        title: 'Consequatur accusantium quia porro minus voluptates dignissimos est.',
        categories: [482, 487, 488],
        publish: false,
      },
    ],
    savedInterviews: [
      {
        id: 63,
        title: 'Corrupti cum ratione animi maxime enim.',
        categories: [477, 488],
      },
      {
        id: 64,
        title: 'Consequatur accusantium quia porro minus voluptates dignissimos est.',
        categories: [488],
      },
    ],
    categories: [
      {
        id: 477,
        name: 'accusantium',
        color: '#177456',
      },
      {
        id: 482,
        name: 'sapiente',
        color: '#123926',
      },
      {
        id: 487,
        name: 'et',
        color: '#100456',
      },
      {
        id: 488,
        name: 'quas',
        color: '#100006',
      },
    ],
  },
};

const userData = (state = initialState, action = {}) => {
  switch (action.type) {
    case MODIFY_USER_INFO:
      return {
        ...state,
        userData: {
          ...state.userData,
          [action.payload.name]: action.payload.value,
        },
      };
      break;
    default:
      return state;
  }
};

export default userData;