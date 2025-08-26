import type { RouteObject } from 'react-router';

import Homepage from '../Homepage';
import AppLayout from '../layout/AppLayout';
import PhoneBook from '../problems/Phonebook';
import MatchSearch from '../problems/matchSearch';

export const APP_ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: Homepage,
      },
      {
        path: 'phone-book',
        Component: PhoneBook,
      },
      {
        path: 'match-search',
        Component: MatchSearch,
      },
    ],
  },
];
