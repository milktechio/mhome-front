import { ReactNode } from "react";
import { useScreenDimentions } from "../../utils/hooks/useScreenDimentions";
import SideBar from "./components/SideBar/SideBar";
import LayOutStyles from "./LayOut.module.css";
import PageDisplay from "./components/PageDisplay/PageDisplay";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import HeaderMobileVersion from "./components/HeaderMobileVersion/HeaderMobileVersion";

const LayOut = ({ children }: { children: ReactNode }) => {
  const { width } = useScreenDimentions();

  return (
    <div className={LayOutStyles.layoutContainer}>
      {width > 768 && <SideBar />}
      {width <= 768 && <HeaderMobileVersion />}
      <PageDisplay>{children}</PageDisplay>
      {width <= 768 && <TabNavigator />}
    </div>
  );
};

export default LayOut;
