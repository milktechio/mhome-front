import neighbors from "../../../assets/SideBar/Neighbors.svg";
import home from "../../../assets/SideBar/Home.svg";
import payments from "../../../assets/SideBar/Payments.svg";
import reports from "../../../assets/SideBar/Reports.svg";
import homeN from "../../../assets/SideBar/HomenN.svg";
import neighborsN from "../../../assets/SideBar/NeighborsN.svg";
import paymentsN from "../../../assets/SideBar/PaymentsN.svg";
import reportsN from "../../../assets/SideBar/ReportsN.svg";


export const linksSideBar = [
  {
    id: 1,
    name: "Home",
    link: "Home",
    icon: home,
    iconNegative: homeN,
  },
  {
    id: 2,
    name: "Vecinos",
    link: "Neighbors",
    icon: neighbors,
    iconNegative: neighborsN,
  },
  {
    id: 3,
    name: "Reportes",
    link: "Reports",
    icon: reports,
    iconNegative: paymentsN,
  },
  {
    id: 4,
    name: "Pagos",
    link: "Payments",
    icon: payments,
    iconNegative: reportsN,
  },
];
