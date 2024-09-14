import { ButtonPrimaryType } from "@/utils/types/button.types";
import styles from "./ButtonPrimaryImg.module.css";

const ButtonPrimaryImg = ({ text, img, handler }: ButtonPrimaryType) => {
  return (
    <button className={"btn btn-light "+styles.ButtonPrimary} onClick={handler}>
      {text}
      {img && <img src={img} />}
    </button>
  );
};

export default ButtonPrimaryImg;
