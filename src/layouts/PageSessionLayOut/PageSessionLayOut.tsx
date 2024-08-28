import { ReactNode } from "react";
import { NavLinks } from "@/utils/types/navLinks.types";
import styles from "./PageSessionLayOut.module.css";
import SideNavBar from "@/Components/SideNavBar/SideNavBar";
import ButtonPrimaryImg from "@/Components/Buttons/ButtonPrimaryImg/ButtonPrimaryImg";
import SitesList from "@/Components/SitesList/SitesList";
import mHomeLogo from "../../assets/LayOut/MHomeCornerLogo.svg";
import HeaderMobileVersion from "@/Components/HeaderMobileVersion/HeaderMobileVersion";
import TabNavigator from "@/Components/TabNavigator/TabNavigator";

const PageSessionLayOut = ({ children }: { children: ReactNode }) => {
  return <div className={styles.pageSessionContainer}>{children}</div>;
};

const Header = ({ screen }: { screen: number }) => {
  return (
    <div className={styles.header}>
      {screen > 768 && <img src={mHomeLogo} alt="mHome!" />}
      {screen <= 768 && <HeaderMobileVersion />}
    </div>
  );
};

const SideBar = ({
  handler,
  links,
  screen,
}: {
  links: NavLinks[];
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  screen: number;
}) => {
  return (
    <div className={styles.sideBar}>
      {screen > 768 && (
        <SideNavBar>
          <SideNavBar.LinkArea>
            <SitesList linksList={links} />
          </SideNavBar.LinkArea>
          <SideNavBar.LogoArea />
          <SideNavBar.ButtonArea>
            <ButtonPrimaryImg text="Salir" handler={handler} />
          </SideNavBar.ButtonArea>
        </SideNavBar>
      )}
      {screen <= 768 && <TabNavigator linksList={links} />}
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

PageSessionLayOut.SideBar = SideBar;
PageSessionLayOut.Header = Header;
PageSessionLayOut.Content = Content;

export default PageSessionLayOut;
