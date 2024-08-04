import styles from "./InputSimple.module.css";

const InputSimple = ({
  placeholderText,
  inputValue,
}: {
  inputValue?: string | undefined;
  placeholderText?: string | undefined;
}) => {
  return (
    <div className={styles.inputContainer}>
      <input value={inputValue} placeholder={placeholderText} type="text" />
    </div>
  );
};

export default InputSimple;
