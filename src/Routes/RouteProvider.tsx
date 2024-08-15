import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../features/Login/Login";
import Home from "../features/Home/Home";
import Neighbors from "../features/Neighbors/Neighbors";
import Reports from "../features/Reports/Reports";
import Payments from "../features/Payments/Payments";
import Register from "../features/Register/Register";

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
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Neighbors",
        element: <Neighbors />,
      },
      {
        path: "/Reports",
        element: <Reports />,
      },
      {
        path: "/Payments",
        element: <Payments />,
      },
    ],
  },
]);

const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderApp;
