import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./SitesList.module.css";

interface ILinksList {
  linksList: {
    id: number;
    name: string;
    link: string;
    icon: string;
    iconNegative: string;
  }[];
}

const SitesList = ({ linksList }: ILinksList) => {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <div className={styles.sitesListContainer}>
      <ul className={styles.listContainer}>
        {linksList.map((link, i) => {
          return (
            <li
              className={styles.memberlistLink}
              key={`link-sidebar-${i}`}
              onMouseEnter={() => {
                setIndex(i + 1);
              }}
              onMouseLeave={() => {
                setIndex(null);
              }}
            >
              <Link
                className={styles.linkStyle}
                to={`/Dashboard/${link.link}`}
                // cambiar color de fondo al colocar cursor
              >
                {/* cambio de icono con color opuesto al fondo */}
                {index !== link.id && <img src={link.icon} alt="icon" />}
                {index === link.id && (
                  <img src={link.iconNegative} alt="icon" />
                )}
                <div className={styles.linkText}>{link.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SitesList;
