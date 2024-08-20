import styles from "./Slide.module.css";

const Slide = ({ number, active }: { number: number; active: boolean }) => {
  return <div className={styles.slideItemContainer}>{number}</div>;
};

export default Slide;
