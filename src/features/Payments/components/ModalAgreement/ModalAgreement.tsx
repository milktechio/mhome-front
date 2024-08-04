import Modal from "../../../../Components/Modal/Modal";
import InputSimple from "../../../../Components/Inputs/InputSimple/InputSimple";
import "./ModalAgreement.css";

type ModalType = {
  isOpen: string;
  closeModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ModalAgreement = ({ isOpen, closeModal }: ModalType) => {
  return (
    <>
      {isOpen === "agreement" && (
        <Modal title="convenio" handler={closeModal}>
          <div className="modal-display-container">
            <div className="modal-input-container">
              <InputSimple placeholderText="Casa" />
            </div>
            <div className="modal-text-container">$3000.00</div>
          </div>
          <div className="modal-display-container">
            <div className="modal-input-container">
              <InputSimple placeholderText="Cantidad de Pagos" />
            </div>
            <div className="modal-text-container">$3000.00</div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalAgreement;
