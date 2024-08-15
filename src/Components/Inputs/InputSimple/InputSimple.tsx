import { InputDataType } from "../../../utils/types/inputData.types";
import styles from "./InputSimple.module.css";

const InputSimple = ({
  placeholderText,
  inputValue,
  handler,
}: InputDataType) => {
  return (
    <div className={styles.inputContainer}>
      <input
        value={inputValue}
        onChange={handler}
        placeholder={placeholderText}
        type="text"
      />
    </div>
  );
};

export default InputSimple;
