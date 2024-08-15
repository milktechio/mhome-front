import { Link } from "react-router-dom";
import { LoginInputData } from "../../utils/login.types";
import styles from "./LoginInputArea.module.css";
import InputSimple from "../../../../Components/Inputs/InputSimple/InputSimple";
import ButtonPrimaryImg from "../../../../Components/Buttons/ButtonPrimaryImg/ButtonPrimaryImg";

const LoginInputArea = ({
  inputValueEmail,
  inputValuePassword,
  authHandler,
  onchangeHandlerEmail,
  onchangeHandlerPassword,
}: LoginInputData) => {
  return (
    <div className={styles.loginInputArea}>
      <div className={styles.loginInputContainer}>
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
      <Link to="/register" style={{ textAlign: "center" }}>
        registrate
      </Link>
      <div className={styles.buttonContainer}>
        <ButtonPrimaryImg text="Ingresar" clickHandler={authHandler} />
      </div>
    </div>
  );
};

export default LoginInputArea;
