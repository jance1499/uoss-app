import { Speedwalk } from './speedwalk';

export const SPEEDWALKS: Speedwalk[] = [
  {
    name: 'hidonwalk',
    directions: ['s', 's', 'ff3', 'say hidon'],
    category: 'Secret Hunt',
    description: 'Hidon'
  },
  {
    name: 'balcastlewalk',
    directions: ['e', 'e', 'ff5', 'airship', 'say bal castle'],
    category: 'Area',
    description: 'Bal Castle'
  },
  {
    name: 'mission1walk',
    directions: ['n', 'n', 'ct', 'nw', 'portal'],
    category: 'Mission',
    description: 'Chrono\'s Harem'
  }
];
