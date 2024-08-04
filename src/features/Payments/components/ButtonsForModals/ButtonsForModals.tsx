import InputSearch from "../../../../Components/Inputs/InputSearch/InputSearch";
import ButtonPrimary from "../../../../Components/Buttons/ButtonPrimary/ButtonPrimary";
import styles from "./ButtonsForModals.module.css";

type buttonsForModalsType = {
  setModalExpenses?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setModalAgreement?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setModalPayment?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ButtonsForModals = ({
  setModalExpenses,
  setModalAgreement,
  setModalPayment,
}: buttonsForModalsType) => {
  return (
    <div className={styles.paymentsInputContainer}>
      <div className={styles.buttonsContainer}>
        <ButtonPrimary text="Gasto" clickHandler={setModalExpenses} />
        <ButtonPrimary text="Convenio" clickHandler={setModalAgreement} />
        <ButtonPrimary text="Pago" clickHandler={setModalPayment} />
      </div>
      <div className={styles.inputContainer}>
        <InputSearch placeholderText="Buscar" />
      </div>
    </div>
  );
};

export default ButtonsForModals;
