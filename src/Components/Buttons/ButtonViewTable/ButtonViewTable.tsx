import styles from "./ButtonViewTable.module.css";
import viewIcon from "../../../assets/Table/View.svg";
import { MouseEventHandler } from "react";

const ButtonViewTable = ({
  handler,
}: {
  handler?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={styles.buttonViewContainer} onClick={handler}>
      <img src={viewIcon} alt="detail view" />
    </button>
  );
};

export default ButtonViewTable;
