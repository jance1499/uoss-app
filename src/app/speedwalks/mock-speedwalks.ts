import { Speedwalk } from './speedwalk';

export const SPEEDWALKS: Speedwalk[] = [
  {
    id: 1,
    name: 'hidonwalk',
    directions: ['s', 's', 'ff3', 'say hidon'],
    category: 'Secret Hunt',
    description: 'Hidon'
  },
  {
    id: 2,
    name: 'balcastlewalk',
    directions: ['e', 'e', 'ff5', 'airship', 'say bal castle'],
    category: 'Area',
    description: 'Bal Castle'
  },
  {
    id: 3,
    name: 'mission1walk',
    directions: ['n', 'n', 'ct', 'nw', 'portal'],
    category: 'Mission',
    description: 'Chrono\'s Harem'
  }
];
