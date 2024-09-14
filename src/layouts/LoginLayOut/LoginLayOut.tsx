import { ReactNode } from "react";
import { LoginInputData } from "@/utils/types/login.types";
import { Link } from "react-router-dom";
import mHomeLogo from "../../assets/Login/MHomeLogo.svg";
import ButtonPrimaryImg from "../../Components/Buttons/ButtonPrimaryImg/ButtonPrimaryImg";
import InputSimple from "../../Components/Inputs/InputSimple/InputSimple";
import styles from "./LoginLayOut.module.css";

const LoginLayOut = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
        <img className={styles.image} src={mHomeLogo} alt="MHome" />
      </div>
      <div className={styles.sideBar}>{children}</div>
      <div className={styles.imageContainer} />
    </div>
  );
};

const SideBarComponent = ({ children }: { children: ReactNode }) => {
  return <div className={styles.sideBarContent}>{children}</div>;
};

const InputAreaContent = ({
  inputValueEmail,
  inputValuePassword,
  onchangeHandlerEmail,
  onchangeHandlerPassword,
}: LoginInputData) => {
  return (
    <div className={styles.inputArea}>
      <InputSimple
        placeholderText="Email"
        inputValue={inputValueEmail}
        handler={onchangeHandlerEmail}
      />
      <InputSimple
        type="password"
        placeholderText="Password"
        inputValue={inputValuePassword}
        handler={onchangeHandlerPassword}
      />
    </div>
  );
};

const LinksAreaContent = () => {
  return (
    <div className={styles.linksArea}>
      <Link to="/register">Recuperar contraseña</Link>
    </div>
  );
};

const ButtonAreaContent = ({
  authHandler,
}: {
  authHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.buttonArea}>
      <ButtonPrimaryImg text="Ingresar" handler={authHandler} />
    </div>
  );
};

LoginLayOut.SideBarComponent = SideBarComponent;
LoginLayOut.InputAreaContent = InputAreaContent;
LoginLayOut.LinksAreaContent = LinksAreaContent;
LoginLayOut.ButtonAreaContent = ButtonAreaContent;

export default LoginLayOut;
