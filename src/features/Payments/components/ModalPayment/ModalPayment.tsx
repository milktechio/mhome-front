import InputSimple from "../../../../Components/Inputs/InputSimple/InputSimple";
import Modal from "../../../../Components/Modal/Modal";
import "./ModalPayment.css";

type ModalPaymentType = {
  isOpen: string;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
};

const ModalPayment = ({ isOpen, closeModal }: ModalPaymentType) => {
  return (
    <>
      {isOpen === "payment" && (
        <Modal title="pagos" handler={closeModal}>
          <div className="modal-content-container">
            <div className="modal-display-container">
              <div className="modal-text-container">$3000.00</div>
              <div className="modal-input-container">
                <InputSimple placeholderText="Monto" />
              </div>
              <div className="modal-text-container">$3000.00</div>
              <div className="modal-input-container">
                <InputSimple placeholderText="Metodo de pago" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalPayment;
