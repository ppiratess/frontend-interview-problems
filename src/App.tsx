import { createBrowserRouter, RouterProvider } from "react-router";

import { APP_ROUTES } from "./constants/routes";

const router = createBrowserRouter(APP_ROUTES);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
