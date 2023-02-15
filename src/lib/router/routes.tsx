import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import Demo from "lib/pages/demo";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: "/demo",
    element: <Demo />,
  },
];
