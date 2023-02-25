import Users from "./pages/Users";
import Layout from "./components/Layout";
import NewPlace from "./pages/NewPlace";
import UserPlaces from "./pages/UserPlaces";
import UpdatePlace from "./pages/UpdatePlace";
import Auth from "./pages/Auth";
import PrivateRoute from "./components/PrivateRoute";

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
