import { ReactNode } from "react";
import { linksSideBar } from "./utils/SideBar.utils";
import layOutStyles from "./css/LayOut.module.css";
import sideBarStyles from "./css/SideBar.module.css";
import pageDisplayStyles from "./css/PageDisplay.module.css";
import SitesList from "./components/SitesList/SitesList";
import BottomSideBar from "./components/BottomSideBar/BottomSideBar";
import MHome from "../../assets/LayOut/MHomeCornerLogo.svg";
import HeaderMobileVersion from "./components/HeaderMobileVersion/HeaderMobileVersion";
import TabNavigator from "./components/TabNavigator/TabNavigator";

const LayOut = ({ children }: { children: ReactNode }) => {
  return <div className={layOutStyles.layoutContainer}>{children}</div>;
};

const SideBar = ({ screenWidth }: { screenWidth: number }) => {
  return (
    <>
      {screenWidth > 768 && (
        <div className={sideBarStyles.sideBarContainer}>
          <div></div>
          <SitesList linksList={linksSideBar} />
          <BottomSideBar />
        </div>
      )}
    </>
  );
};

const PageDisplayContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={pageDisplayStyles.pageDisplayContainer}>{children}</div>
  );
};

const PageDisplayHeader = ({ screenWidth }: { screenWidth: number }) => {
  return (
    <>
      {screenWidth > 768 && (
        <div className={pageDisplayStyles.header}>
          <img className={pageDisplayStyles.image} src={MHome} alt="Mhome!" />
        </div>
      )}
      {screenWidth < 768 && <HeaderMobileVersion />}
    </>
  );
};

const PageDisplayTabNav = ({ screenWidth }: { screenWidth: number }) => {
  return <>{screenWidth < 768 && <TabNavigator />}</>;
};

LayOut.SideBar = SideBar;
LayOut.PageDisplayHeader = PageDisplayHeader;
LayOut.PageDisplayContainer = PageDisplayContainer;
LayOut.PageDisplayTabNav = PageDisplayTabNav;

export default LayOut;
