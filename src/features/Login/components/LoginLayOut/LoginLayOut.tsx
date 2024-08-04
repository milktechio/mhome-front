import styles from "./LoginLayOut.module.css";
import { ILoginLayOut } from "./utils/LoginLayOut.types";

const LoginLayOut = ({ children }: ILoginLayOut) => {
  return (
    <div className={styles.loginScreenContainer}>
      <div className={styles.loginContainer}>{children}</div>
      <div className={styles.loginImageContainer} />
    </div>
  );
};

export default LoginLayOut;
