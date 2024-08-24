import { ReactNode } from "react";
import styles from "./Card.module.css";
import InputSimple from "../Inputs/InputSimple/InputSimple";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.cardContainer__header}>
      <h3 style={{ width: "100%" }}>{title}</h3>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className={styles.cardContainer__body}>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.cardContainer__footer}>{children}</div>;
};

const Input = ({ text }: { text: string }) => {
  return (
    <div className={styles.cardContainer__input}>
      <InputSimple placeholderText={text} />
    </div>
  );
};

const Button = ({ text }: { text: string }) => {
  return (
    <div className={styles.cardContainer__button}>
      <ButtonPrimary text={text} />
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Input = Input;
Card.Button = Button;

export default Card;
