import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Dashboard from "../features/Dashboard/Dashboard";
import Home from "../features/Home/Home";
import Neighbors from "../features/Neighbors/Neighbors";
import Reports from "../features/Reports/Reports";
import Payments from "../features/Payments/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/Home",
        element: <Home />,
      },
      {
        path: "/dashboard/Neighbors",
        element: <Neighbors />,
      },
      {
        path: "/dashboard/Reports",
        element: <Reports />,
      },
      {
        path: "/dashboard/Payments",
        element: <Payments />,
      },
    ],
  },
]);

const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderApp;
