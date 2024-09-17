import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../features/Pages/Admin/Home/Home";
import Neighbors from "@/features/Pages/Admin/Neighbors/Neighbors";
import ReportsAdmin from "@/features/Pages/Admin/Reports/Reports";
import Payments from "@/features/Pages/Admin/Payments/Payments";
import Register from "../features/Register/Register";
import HomeUser from "@/features/Pages/User/Home/HomeUser";
import Products from "@/features/Pages/Admin/Products";
import Variants from "@/features/Pages/Admin/Variants";
import ProfileUser from "@/features/Pages/User/Profile/ProfileUser";
import PaymentsUser from "@/features/Pages/User/Payments/PaymentsUser";
import ReportsUser from "@/features/Pages/User/Reports/Reports";
import App from "@/features/App/App";

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
        index: true,
        path: "admin-home",
        element: <Home />,
      },
      {
        path: "admin-neighbors",
        element: <Neighbors />,
      },
      {
        path: "admin-reports",
        element: <ReportsAdmin />,
      },
      {
        path: "admin-payments",
        element: <Payments />,
      },
      {
        path: "admin-membership",
        element: <Products />,
      },
            {
        path: "admin-membership/:id",
        element: <Variants />,
      },
      {
        path: "user-home",
        element: <HomeUser />,
      },
      {
        path: "user-profile",
        element: <ProfileUser />,
      },
      {
        path: "user-payments",
        element: <PaymentsUser />,
      },
      {
        path: "user-reports",
        element: <ReportsUser />,
      },
    ],
  },
]);

const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderApp;
