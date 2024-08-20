import Slide from "./Slide/Slide";
import styles from "./Slider.module.css";
import GoBackW from "../../assets/Buttons/GoBackW.svg";
import GoForwW from "../../assets/Buttons/GoForwardW.svg";
import { useState } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6];

const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>("");

  const onNext = (index: number) => {
    setIndex(index + 1);
    setDirection("right");
  };

  const onPrev = (index: number) => {
    setIndex(index - 1);
    setDirection("left");
  };

  return (
    <div className={styles.sliderContainer}>
      {numbers.map((n) => {
        return (
          <Slide
            direction={direction}
            key={`news-slide-${n}`}
            number={n}
            active={index === n}
          />
        );
      })}
      <button
        disabled={index === 0}
        onClick={() => onPrev(index)}
        className={styles.arrowButton}
      >
        <img src={GoBackW} alt="left" />
      </button>
      <button
        disabled={index === numbers.length - 1}
        onClick={() => onNext(index)}
        style={{ right: "0px" }}
        className={styles.arrowButton}
      >
        <img src={GoForwW} alt="right" />
      </button>
    </div>
  );
};

export default Slider;
