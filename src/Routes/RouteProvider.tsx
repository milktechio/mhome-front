import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../features/Login/Login";
import Home from "../features/admin/Home/Home";
import Neighbors from "../features/admin/Neighbors/Neighbors";
import Reports from "../features/admin/Reports/Reports";
import Payments from "../features/admin/Payments/Payments";
import Register from "../features/Register/Register";
import HomeUser from "../features/user/Home/HomeUser";
import ProfileUser from "../features/user/Profile/ProfileUser";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin-home",
        element: <Home />,
      },
      {
        path: "/admin-neighbors",
        element: <Neighbors />,
      },
      {
        path: "/admin-reports",
        element: <Reports />,
      },
      {
        path: "/admin-payments",
        element: <Payments />,
      },
      {
        path: "/user-home",
        element: <HomeUser />,
      },
      {
        path: "/user-profile",
        element: <ProfileUser />,
      },
    ],
  },
]);

const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderApp;
