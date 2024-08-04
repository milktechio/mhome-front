import mHomeLogo from "../../../../assets/Login/MHomeLogo.svg";
import styles from "./LoginImageArea.module.css";

const LoginImageArea = () => {
  return (
    <div className={styles.loginImageArea}>
      <img src={mHomeLogo} alt="belcanto_Napoles" />
    </div>
  );
};

export default LoginImageArea;
