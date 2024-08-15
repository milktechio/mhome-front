import styles from "./HeaderMobileVersion.module.css";
import MHome from "../../../../assets/LayOut/MHomeCornerLogo.svg";
import ButtonBackNavigation from "../../../Buttons/ButtonBackNavigation/ButtonBackNavigation";

const HeaderMobileVersion = () => {
  return (
    <div className={styles.headerContainer}>
      <ButtonBackNavigation />
      <img src={MHome} alt="Main logo" />
    </div>
  );
};

export default HeaderMobileVersion;
