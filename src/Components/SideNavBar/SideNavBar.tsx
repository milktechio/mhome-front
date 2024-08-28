import { ReactNode } from "react";
import logoMHome from "../../assets/SideBar/LogoSecondary.svg";
import styles from "./SideNavBar.module.css";

const SideNavBar = ({ children }: { children: ReactNode }) => {
  return <div className={styles.sideNavBarContainer}>{children}</div>;
};

const LinkArea = ({ children }: { children: ReactNode }) => {
  return <div className={styles.linkArea}>{children}</div>;
};

const LogoArea = () => {
  return (
    <div className={styles.logoArea}>
      <img className={styles.logoArea__image} src={logoMHome} alt="" />
    </div>
  );
};

const ButtonArea = ({ children }: { children: ReactNode }) => {
  return <div className={styles.buttonArea}>{children}</div>;
};

SideNavBar.LinkArea = LinkArea;
SideNavBar.LogoArea = LogoArea;
SideNavBar.ButtonArea = ButtonArea;

export default SideNavBar;
