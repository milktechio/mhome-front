import styles from "./HeaderMobileVersion.module.css";
import MHome from "../../../../assets/LayOut/MHomeCornerLogo.svg";

const HeaderMobileVersion = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={MHome} alt="Main logo" />
    </div>
  );
};

export default HeaderMobileVersion;
