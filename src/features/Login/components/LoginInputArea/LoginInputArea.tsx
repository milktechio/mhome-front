import styles from "./LoginInputArea.module.css";
import InputSimple from "../../../../Components/Inputs/InputSimple/InputSimple";
import ButtonPrimaryImg from "../../../../Components/Buttons/ButtonPrimaryImg/ButtonPrimaryImg";

const LoginInputArea = ({
  authHandler,
}: {
  authHandler: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.loginInputArea}>
      <div className={styles.loginInputContainer}>
        <InputSimple placeholderText="Email" />
        <InputSimple placeholderText="Password" />
      </div>
      <div className={styles.buttonContainer}>
        <ButtonPrimaryImg text="Ingresar" clickHandler={authHandler} />
      </div>
    </div>
  );
};

export default LoginInputArea;
