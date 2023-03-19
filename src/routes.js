import React from "react";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

const Users = React.lazy(() => import("./pages/Users"));
const NewPlace = React.lazy(() => import("./pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./pages/UpdatePlace"));
const Auth = React.lazy(() => import("./pages/Auth"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "/places/new",
        auth: true,
        element: <NewPlace />,
      },
      {
        path: "/:userId/places",
        element: <UserPlaces />,
      },
      {
        path: "/places/:placeId",
        auth: true,
        element: <UpdatePlace />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
