import secondaryLogo from "../../../../../../assets/SideBar/LogoSecondary.svg";
import sytles from "./BottomSideBar.module.css";
import ButtonPrimaryImg from "../../../../../Buttons/ButtonPrimaryImg/ButtonPrimaryImg";

const BottomSideBar = ({
  handler,
}: {
  handler: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={sytles.bottomSideBarContainer}>
      <img src={secondaryLogo} alt="logo-home" />
      <div className={sytles.buttonContainer}>
        <ButtonPrimaryImg text="Salir" clickHandler={handler} />
      </div>
    </div>
  );
};

export default BottomSideBar;
