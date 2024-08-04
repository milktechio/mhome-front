import { useNavigate } from "react-router-dom";
import { linksSideBar } from "../../utils/SideBar.utils";
import BottomSideBar from "./components/BottomSideBar/BottomSideBar";
import SitesList from "./components/SitesList/SitesList";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sideBarContainer}>
      <div></div>
      <SitesList linksList={linksSideBar} />
      <BottomSideBar
        handler={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default SideBar;
