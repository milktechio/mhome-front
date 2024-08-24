import styles from "../CarouselItem/CarouselItem.module.css";

const CarouselItem = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImageContainer}></div>
      <div className={styles.itemParraphContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto
          vitae laudantium repellendus.
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
