import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
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
  close,
}: {
  text?: string;
  handler?: MouseEventHandler<HTMLButtonElement>;
  close?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.footer}>
      <ButtonPrimaryImg handler={close} text="Cancelar" />
      {handler && <ButtonPrimaryImg handler={handler} text={text} />}
    </div>
  );
};

const Image = ({ image }: { image: string }) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.imageContainer__image} src={image} alt="" />
    </div>
  );
};

const Text = ({ text }: { text: string }) => {
  return (
    <div className={styles.textContainer}>
      <h3 className={styles.textContainer__title}>Descripción: </h3>
      <p>{text}</p>
    </div>
  );
};

const EditComponent = ({
  text,
  handler,
}: {
  text: string;
  handler: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className={styles.editComponenContainer}>
      <select
        onChange={handler}
        className={styles.editComponenContainer__select}
        style={{ width: "100%" }}
      >
        <option value={text}>{text}</option>
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
    </div>
  );
};

const ProfileView = ({
  name,
  lastname,
  email,
}: {
  name: string;
  lastname: string;
  email: string;
}) => {
  return (
    <div className={styles.profileContainer}>
      <p>{name}</p>
      <p>{lastname}</p>
      <p>{email}</p>
    </div>
  );
};

const ShowDataText = ({ text }: { text: string }) => {
  return (
    <div className={styles.profileContainer}>
      <p>{text}</p>
    </div>
  );
};

const Vote = ({
  options,
  handler,
}: {
  options: string[];
  handler?: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className={styles.editComponenContainer}>
      <select
        onChange={handler}
        className={styles.editComponenContainer__select}
        style={{ width: "100%" }}
      >
        {options.map((option, i) => {
          return <option key={`option-vote-${i}`}>{option}</option>;
        })}
      </select>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.DetailView = Image;
Modal.Text = Text;
Modal.EditComponent = EditComponent;
Modal.ProfileView = ProfileView;
Modal.ShowDataText = ShowDataText;
Modal.Vote = Vote;

export default Modal;
