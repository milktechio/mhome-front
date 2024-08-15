import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { logOut } from "../../../redux/features/user/userSlice";
import styles from "./ButtonBackNavigation.module.css";
import GoBack from "../../../assets/Buttons/GoBackButton.svg";

const ButtonBackNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div onClick={logOutHandler} className={styles.backNavContainer}>
      <img className={styles.backNavContainerImage} src={GoBack} alt="" />
    </div>
  );
};

export default ButtonBackNavigation;
