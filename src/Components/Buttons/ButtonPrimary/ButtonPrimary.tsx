import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className={styles.ButtonPrimary} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
