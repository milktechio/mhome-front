import { ReactNode } from "react";
import SideBar from "./components/SideBar/SideBar";
import LayOutStyles from "./LayOut.module.css";
import PageDisplay from "./components/PageDisplay/PageDisplay";

const LayOut = ({ children }: { children: ReactNode }) => {
  return (
    <div className={LayOutStyles.layoutContainer}>
      <SideBar />
      <PageDisplay>{children}</PageDisplay>
    </div>
  );
};

export default LayOut;
