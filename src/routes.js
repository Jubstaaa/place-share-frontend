import React, { Suspense } from "react";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/UIElements/Loader";

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
        element: (
          <Suspense fallback={<Loader />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "/places/new",
        auth: true,
        element: (
          <Suspense fallback={<Loader />}>
            <NewPlace />
          </Suspense>
        ),
      },
      {
        path: "/:userId/places",
        element: (
          <Suspense fallback={<Loader />}>
            <UserPlaces />
          </Suspense>
        ),
      },
      {
        path: "/places/:placeId",
        auth: true,
        element: (
          <Suspense fallback={<Loader />}>
            <UpdatePlace />
          </Suspense>
        ),
      },
      {
        path: "/auth",
        element: (
          <Suspense fallback={<Loader />}>
            <Auth />
          </Suspense>
        ),
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
