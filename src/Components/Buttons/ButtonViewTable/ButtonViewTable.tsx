import styles from "./ButtonViewTable.module.css";
import viewIcon from "../../../assets/Table/View.svg";
import { MouseEventHandler } from "react";

const ButtonViewTable = ({
  id,
  handler,
}: {
  id?: string;
  handler?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button id={id} className={styles.buttonViewContainer} onClick={handler}>
      <img src={viewIcon} alt="detail view" />
    </button>
  );
};

export default ButtonViewTable;
