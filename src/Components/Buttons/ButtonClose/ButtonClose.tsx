import { ButtonPrimaryType } from "@/utils/types/button.types";
import Close from "../../../assets/Modal/cancel-svgrepo-com 1.svg";
import styles from "./ButtonClose.module.css";

const ButtonClose = ({ handler }: ButtonPrimaryType) => {
  return (
    <button className={styles.ButtonPrimary} onClick={handler}>
      <img src={Close} alt="close" />
    </button>
  );
};

export default ButtonClose;
