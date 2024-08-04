import styles from "./ButtonPrimaryImg.module.css";

interface IButtonPrimaryImg {
  text: string;
  img?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonPrimaryImg = ({ text, img, clickHandler }: IButtonPrimaryImg) => {
  return (
    <button className={styles.ButtonPrimary} onClick={clickHandler}>
      {text}
      {img && <img src={img} />}
    </button>
  );
};

export default ButtonPrimaryImg;
