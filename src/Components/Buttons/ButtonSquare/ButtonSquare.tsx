import { ButtonPrimaryType } from "@/utils/types/button.types";
import styles from "./ButtonSquare.module.css";

const ButtonSquare = ({ img, handler }: ButtonPrimaryType) => {
  return (
    <button className={styles.buttonSquareContainer} onClick={handler}>
      {img && <img src={img} />}
    </button>
  );
};

export default ButtonSquare;
