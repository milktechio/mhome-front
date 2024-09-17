import neighbors from "../../assets/SideBar/Neighbors.svg";
import home from "../../assets/SideBar/Home.svg";
import payments from "../../assets/SideBar/Payments.svg";
import reports from "../../assets/SideBar/Reports.svg";
import homeN from "../../assets/SideBar/HomenN.svg";
import neighborsN from "../../assets/SideBar/NeighborsN.svg";
import paymentsN from "../../assets/SideBar/PaymentsN.svg";
import reportsN from "../../assets/SideBar/ReportsN.svg";
import { NavLinks } from "../types/navLinks.types";

export const linksSideBarAdmin: NavLinks[] = [
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
    name: "Membresias",
    link: "admin-membership",
    icon: neighbors,
    iconNegative: neighborsN,
  },
  {
    id: 4,
    name: "Reportes",
    link: "admin-reports",
    icon: reports,
    iconNegative: reportsN,
  },
  {
    id: 5,
    name: "Pagos",
    link: "admin-payments",
    icon: payments,
    iconNegative: paymentsN,
  },
  {
    id: 6,
    name: "Votos",
    link: "admin-voting",
    icon: payments,
    iconNegative: paymentsN,
  },
];

export const linksSideBarUser: NavLinks[] = [
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
    

  {
    id: 3,
    name: "Membresias",
    link: "user-membership",
    icon: payments,
    iconNegative: paymentsN,
  },
  {
    id: 4,
    name: "Pagos",
    link: "user-payments",
    icon: payments,
    iconNegative: paymentsN,
  },
  {
    id: 5,
    name: "Reportes",
    link: "user-reports",
    icon: reports,
    iconNegative: reportsN,
  },
  {
    id: 4,
    name: "Votos",
    link: "user-voting",
    icon: reports,
    iconNegative: reportsN,
  },
];
