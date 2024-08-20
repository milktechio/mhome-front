import { ButtonPrimaryType } from "@/utils/types/button.types";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ text, handler }: ButtonPrimaryType) => {
  return (
    <button className={styles.ButtonPrimary} onClick={handler}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
