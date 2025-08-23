import type { RouteObject } from "react-router";

import Homepage from "../Homepage";
import AppLayout from "../layout/AppLayout";
import PhoneBook from "../problems/Phonebook";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "phone-book",
        Component: PhoneBook,
      },
    ],
  },
];
