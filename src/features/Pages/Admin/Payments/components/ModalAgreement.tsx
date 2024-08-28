import Modal from "@/Components/Modal/Modal";
import { MouseEventHandler } from "react";

const ModalAgreement = ({
  modal,
  handler,
}: {
  modal: string;
  handler: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      {modal === "agreement" && (
        <Modal>
          <Modal.Header text="Convenio" />
          <Modal.Body>Agreement</Modal.Body>
          <Modal.Footer handler={handler} text="Hacer algo!" />
        </Modal>
      )}
    </>
  );
};

export default ModalAgreement;
