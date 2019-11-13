import { IRoute } from 'models/route';

//#region Routes declaration
const HOME_PAGE_URL = '/';
//#endregion

export const APP_ROUTES: IRoute[] = [
  {
    name: 'option1',
    linkTo: HOME_PAGE_URL,
    icon: 'pie-chart',
    displayName: 'Option 1',
  },
  {
    name: 'option2',
    linkTo: HOME_PAGE_URL,
    icon: 'dashboard',
    displayName: 'Option 2',
  },
  {
    name: 'user',
    linkTo: HOME_PAGE_URL,
    icon: 'user',
    displayName: 'User',
    children: [
      {
        name: 'tom',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Tom',
      },
      {
        name: 'bill',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Bill',
      },
      {
        name: 'alex',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Alex',
      },
    ],
  },
  {
    name: 'team',
    linkTo: HOME_PAGE_URL,
    icon: 'team',
    displayName: 'Team',
    children: [
      {
        name: 'team1',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Team 1',
      },
      {
        name: 'team2',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Team 2',
      },
      {
        name: 'team3',
        linkTo: HOME_PAGE_URL,
        icon: '',
        displayName: 'Team 3',
      },
    ],
  },
];
