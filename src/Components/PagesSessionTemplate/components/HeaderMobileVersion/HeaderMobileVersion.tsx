import { useAppDispatch } from "@/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "@/redux/features/user/userSlice";
import styles from "./HeaderMobileVersion.module.css";
import MHome from "../../../../assets/LayOut/MHomeCornerLogo.svg";
import ButtonNavigation from "@/Components/Buttons/ButtonBackNavigation/ButtonNavigation";
import Back from "../../../../assets/Buttons/GoBack.svg";

const HeaderMobileVersion = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.buttonBack}>
        <ButtonNavigation handler={logOutHandler} img={Back} />
      </div>
      <img src={MHome} alt="Main logo" />
    </div>
  );
};

export default HeaderMobileVersion;
