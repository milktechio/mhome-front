import Slide from "./Slide/Slide";
import styles from "./Slider.module.css";
import GoBackW from "../../assets/Buttons/GoBackW.svg";
import GoForwW from "../../assets/Buttons/GoForwardW.svg";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6];

const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className={styles.sliderContainer}>
      {numbers.map((n) => {
        return <Slide number={n}  />;
      })}
      <button className={styles.arrowButton}>
        <img src={GoBackW} alt="left" />
      </button>
      <button style={{ right: "0px" }} className={styles.arrowButton}>
        <img src={GoForwW} alt="right" />
      </button>
    </div>
  );
};

export default Slider;
