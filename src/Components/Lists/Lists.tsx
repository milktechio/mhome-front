import { ReactNode } from "react";
import styles from "./Lists.module.css";

const Lists = ({ children }: { children: ReactNode }) => {
  return <div className={styles.listContainer}>{children}</div>;
};

export const ListItems = ({
  image,
  title,
  dateEnd,
  handler,
}: {
  image: string;
  title: string;
  dateEnd: string;
  handler: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className={styles.listContainer__items} onClick={handler}>
      <img className={styles.listContainer__image} src={image} alt="" />
      <div className={styles.listContainer__title}>{title}</div>
      <div className={styles.listContainer__date}>
        Finaliza en: {dateEnd.split(" ")[0]}
      </div>
    </div>
  );
};

export default Lists;
