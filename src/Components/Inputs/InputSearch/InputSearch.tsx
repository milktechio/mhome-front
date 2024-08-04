import icon from "../../../assets/Input/search_icon.svg";
import styles from "./InputSearch.module.css";

const InputSearch = ({
  placeholderText,
  inputValue,
}: {
  inputValue?: string | undefined;
  placeholderText?: string | undefined;
}) => {
  return (
    <div className={styles.inputContainer}>
      <input value={inputValue} placeholder={placeholderText} type="text" />
      <img src={icon} alt="search" />
    </div>
  );
};

export default InputSearch;
