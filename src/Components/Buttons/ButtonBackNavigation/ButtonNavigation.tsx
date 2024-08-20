import styles from "./ButtonNavigation.module.css";
import { ButtonPrimaryType } from "@/utils/types/button.types";

const ButtonNavigation = ({ handler, img }: ButtonPrimaryType) => {
  return (
    <button onClick={handler} className={styles.navContainer}>
      <img className={styles.navContainerImage} src={img} alt="navigation" />
    </button>
  );
};

export default ButtonNavigation;
