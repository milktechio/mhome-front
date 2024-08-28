import { ReactNode } from "react";
import styles from "./PageContentDist.module.css";
const PageContentDist = ({ children }: { children: ReactNode }) => {
  return <div className={styles.pageDistributionContainer}>{children}</div>;
};

const Header = ({ children }: { children: ReactNode }) => {
  return <div className={styles.header}>{children}</div>;
};

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.header__title}>
      <h2>{title}</h2>
    </div>
  );
};

const HeaderButtons = ({ children }: { children: ReactNode }) => {
  return <div className={styles.header__buttons}>{children}</div>;
};

const Main = ({ children }: { children: ReactNode }) => {
  return <div className={styles.main}>{children}</div>;
};

PageContentDist.Header = Header;
PageContentDist.HeaderTitle = HeaderTitle;
PageContentDist.HeaderButtons = HeaderButtons;
PageContentDist.Main = Main;

export default PageContentDist;
