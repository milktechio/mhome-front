import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div onClick={() => setShow(!show)} className={styles.accordionContainer}>
      <div className={styles.accordionHeader}>
        <h4 style={{ margin: "0px" }}>titulo</h4>
        <h4 style={{ margin: "0px" }}>{show ? "→" : "↓"}</h4>
      </div>
      <ul className={styles.accordionBody} hidden={show}>
        <li className={styles.accordionItem}>
          <span>texto</span>
          <span>icono</span>
        </li>
        <li className={styles.accordionItem}>
          <span>texto</span>
          <span>icono</span>
        </li>
        <li className={styles.accordionItem}>
          <span>texto</span>
          <span>icono</span>
        </li>
        <li className={styles.accordionItem}>
          <span>texto</span>
          <span>icono</span>
        </li>
      </ul>
    </div>
  );
};

export default Accordion;
