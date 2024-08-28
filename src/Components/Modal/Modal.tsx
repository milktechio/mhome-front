import { MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.css";
import ButtonPrimaryImg from "../Buttons/ButtonPrimaryImg/ButtonPrimaryImg";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalCard}>{children}</div>
    </div>
  );
};

const Header = ({ text }: { text: string }) => {
  return (
    <div className={styles.header}>
      <h2>{text.toUpperCase()}</h2>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

const Footer = ({
  text,
  handler,
}: {
  text: string;
  handler: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.footer}>
      <ButtonPrimaryImg handler={handler} text="Cancelar" />
      <ButtonPrimaryImg text={text} />
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
