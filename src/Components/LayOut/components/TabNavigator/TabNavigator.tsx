import styles from "./TabNavigator.module.css";
import { linksSideBar } from "../../utils/SideBar.utils";
import { Link } from "react-router-dom";

const TabNavigator = () => {
  return (
    <div className={styles.tabNavContainer}>
      <div className={styles.tabNavMain}>
        {linksSideBar.map((link, i) => {
          return (
            <Link
              key={`tab-navigator-${i}`}
              className={styles.tabNavNavigation}
              to={link.link}
            >
              <img src={link.iconNegative} className={styles.tabNavLinkIcon} />
              <p className={styles.tabNavName}>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigator;
