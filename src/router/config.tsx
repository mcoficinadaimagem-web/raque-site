import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PersonalOrganizerLanding from "../pages/personal-organizer/page";
import PersonalOrganizerSP from "../pages/personal-organizer-sp/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/personal-organizer",
    element: <PersonalOrganizerLanding />,
  },
  {
    path: "/personal-organizer-sp",
    element: <PersonalOrganizerSP />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
