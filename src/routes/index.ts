//public routes
import configs from "../configs";
import Home from "../pages/Home";
import { FC, ReactNode } from "react";
import ManagerAlert from "../pages/ManagerAlert";
interface routeType {
  path: string;
  element: FC;
}
export const publicRoutes: routeType[] = [
  {
    path: configs.path.home,
    element: Home,
  },
  {
    path: configs.path.manager,
    element: ManagerAlert,
  },
];

//private routes
