//public routes
import configs from "../configs";
import Home from "../pages/Home";
import { FC, ReactNode } from "react";
import ManagerAlert from "../pages/ManagerAlert";
import Tire from "../pages/Tire";
import Detail from "../pages/Detail";
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
  {
    path: configs.path.tire,
    element: Tire,
  },
  {
    path: configs.path.Detail,
    element: Detail,
  },
];

//private routes
