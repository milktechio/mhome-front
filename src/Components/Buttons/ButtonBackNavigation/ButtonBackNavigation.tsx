import styles from "./ButtonBackNavigation.module.css";
import GoBack from "../../../assets/Buttons/GoBackButton.svg";
import { useNavigate } from "react-router-dom";

const ButtonBackNavigation = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className={styles.backNavContainer}>
      <img className={styles.backNavContainerImage} src={GoBack} alt="" />
    </div>
  );
};

export default ButtonBackNavigation;
