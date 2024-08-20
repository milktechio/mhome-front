import { ReactNode } from "react";
import { LoginInputData } from "../../utils/types/login.types";
import mHomeLogo from "../../assets/Login/MHomeLogo.svg";
import loginTemplate from "./css/PageLoginTemplate.module.css";
import loginImageLogo from "./css/PageLoginImageLogo.module.css";
import loginInputArea from "./css/PageLoginInputArea.module.css";
import loginInputBox from "./css/PageLoginInputBox.module.css";
import ButtonPrimaryImg from "../Buttons/ButtonPrimaryImg/ButtonPrimaryImg";
import InputSimple from "../Inputs/InputSimple/InputSimple";

const PageLoginTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className={loginTemplate.loginScreenContainer}>
      <div className={loginTemplate.loginContainer}>{children}</div>
      <div className={loginTemplate.loginImageContainer} />
    </div>
  );
};

const ImageLogoSection = () => {
  return (
    <div className={loginImageLogo.loginImageArea}>
      <img src={mHomeLogo} alt="belcanto_Napoles" />
    </div>
  );
};

const InputSection = ({
  children,
  authHandler,
}: {
  children: ReactNode;
  authHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={loginInputArea.loginInputArea}>
      {children}
      <div className={loginInputArea.buttonContainer}>
        <ButtonPrimaryImg text="Ingresar" handler={authHandler} />
      </div>
    </div>
  );
};

const InputBox = ({
  inputValueEmail,
  inputValuePassword,
  onchangeHandlerEmail,
  onchangeHandlerPassword,
}: LoginInputData) => {
  return (
    <div className={loginInputBox.loginInputContainer}>
      <InputSimple
        placeholderText="Email"
        inputValue={inputValueEmail}
        handler={onchangeHandlerEmail}
      />
      <InputSimple
        placeholderText="Password"
        inputValue={inputValuePassword}
        handler={onchangeHandlerPassword}
      />
    </div>
  );
};

PageLoginTemplate.ImageLogoSection = ImageLogoSection;
PageLoginTemplate.InputSection = InputSection;
PageLoginTemplate.InputBox = InputBox;

export default PageLoginTemplate;
