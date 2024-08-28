import { LinksListType } from "../../utils/data/LinkListNav";
import { Link } from "react-router-dom";
import styles from "./TabNavigator.module.css";

const TabNavigator = ({ linksList }: { linksList: LinksListType[] }) => {
  return (
    <div className={styles.tabNavContainer}>
      <div className={styles.tabNavMain}>
        {linksList.map((link, i) => {
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
