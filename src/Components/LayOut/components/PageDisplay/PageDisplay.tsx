import { ReactNode } from "react";
import styles from "./PageDisplay.module.css";
import MHome from "../../../../assets/LayOut/MHomeCornerLogo.svg";

const PageDisplay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layoutPageContainer}>
      <div className={styles.header}>
        <img className={styles.image} src={MHome} alt="Mhome!" />
      </div>
      <div className={styles.pageDisplayContainer}>{children}</div>
    </div>
  );
};

export default PageDisplay;
