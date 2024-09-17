import { ChangeEventHandler, ReactNode } from "react";
import styles from "./Card.module.css";
import InputSimple from "../Inputs/InputSimple/InputSimple";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import { InputDataType } from "@/utils/types/inputData.types";
import { ButtonPrimaryType } from "@/utils/types/button.types";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";

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

const Avatar = ({ image }: { image: string }) => {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatarContainer__picture} src={image} alt="" />
    </div>
  );
};

const Input = ({
  text,
  inputValue,
  placeholderText,
  handler,
}: InputDataType) => {
  const screen = useScreenDimentions();
  return (
    <div className={styles.cardContainer__input}>
      {screen.width > 768 && <p>{text}</p>}
      <InputSimple
        inputValue={inputValue}
        placeholderText={placeholderText}
        handler={handler}
      />
    </div>
  );
};

const Button = ({ text, handler }: ButtonPrimaryType) => {
  return (
    <div className={styles.cardContainer__button}>
      <ButtonPrimary text={text} handler={handler} />
    </div>
  );
};

const UpLoadFile = ({
  handler,
}: {
  handler?: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={styles.cardContainer__input_file}>
      <input
        className={styles.submitFile}
        onChange={handler}
        type="file"
        multiple
      />
    </div>
  );
};

const InputTextArea = ({
  text,
  handler,
}: {
  text: string;
  handler?: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <div className={styles.cardContainer__text_area}>
      <h4 className={styles.cardContainer__text_area_title}>{text}</h4>
      <textarea
        className={styles.cardContainer__text_area_text}
        name="des"
        id="des"
        onChange={handler}
      ></textarea>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Avatar = Avatar;
Card.Input = Input;
Card.Button = Button;
Card.UpLoadFile = UpLoadFile;
Card.InputTextArea = InputTextArea;

export default Card;
