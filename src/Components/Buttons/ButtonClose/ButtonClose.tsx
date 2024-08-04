import Close from "../../../assets/Modal/cancel-svgrepo-com 1.svg";
import styles from "./ButtonClose.module.css";

const ButtonClose = ({
  clickHandler,
}: {
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={styles.ButtonPrimary} onClick={clickHandler}>
      <img src={Close} alt="close" />
    </button>
  );
};

export default ButtonClose;
