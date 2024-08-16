import neighbors from "../../assets/SideBar/Neighbors.svg";
import home from "../../assets/SideBar/Home.svg";
import payments from "../../assets/SideBar/Payments.svg";
import reports from "../../assets/SideBar/Reports.svg";
import homeN from "../../assets/SideBar/HomenN.svg";
import neighborsN from "../../assets/SideBar/NeighborsN.svg";
import paymentsN from "../../assets/SideBar/PaymentsN.svg";
import reportsN from "../../assets/SideBar/ReportsN.svg";

export const linksSideBarAdmin = [
  {
    id: 1,
    name: "Home",
    link: "admin-home",
    icon: home,
    iconNegative: homeN,
  },
  {
    id: 2,
    name: "Vecinos",
    link: "admin-neighbors",
    icon: neighbors,
    iconNegative: neighborsN,
  },
  {
    id: 3,
    name: "Reportes",
    link: "admin-reports",
    icon: reports,
    iconNegative: paymentsN,
  },
  {
    id: 4,
    name: "Pagos",
    link: "admin-payments",
    icon: payments,
    iconNegative: reportsN,
  },
];

export const linksSideBarUser = [
  {
    id: 1,
    name: "Home",
    link: "user-home",
    icon: home,
    iconNegative: homeN,
  },
  {
    id: 2,
    name: "Perfil",
    link: "user-profile",
    icon: neighbors,
    iconNegative: neighborsN,
  },
];
