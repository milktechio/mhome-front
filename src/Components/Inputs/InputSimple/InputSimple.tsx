import { InputDataType } from "../../../utils/types/inputData.types";
import styles from "./InputSimple.module.css";

const InputSimple = ({
  disabled,
  placeholderText,
  inputValue,
  handler,
  type="text"
}: InputDataType) => {
  return (
    <>
    <div className={styles.inputContainer}>
      
      <input
        type={type}
        className="form-control"
        disabled={disabled}
        value={inputValue}
        onChange={handler}
        placeholder={placeholderText}
      />
    </div>
    </>
  );
};

export default InputSimple;
