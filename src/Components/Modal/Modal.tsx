import { FC, ReactNode } from "react";
import styles from "./Modal.module.css";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

type ModalType = {
  children: ReactNode;
  buttonText?: string;
  title: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ children, title, handler }: ModalType): ReturnType<FC> => {
  return (
    <div className={styles.modalScreen}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
          <h1>{title.toUpperCase()}</h1>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.buttonContainer}>
          <ButtonPrimary text="Close" clickHandler={handler} />
          <ButtonPrimary text="Do something!" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
