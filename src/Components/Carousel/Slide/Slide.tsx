import styles from "./Slide.module.css";

const Slide = ({
  number,
  active,
  direction,
}: {
  number: number;
  active: boolean;
  direction: string;
}) => {
  return (
    <>
      {active && (
        <div
          className={
            direction === "left"
              ? styles.slideItemContainertoLeft
              : styles.slideItemContainertoRight
          }
        >
          {number}
        </div>
      )}
    </>
  );
};

export default Slide;
