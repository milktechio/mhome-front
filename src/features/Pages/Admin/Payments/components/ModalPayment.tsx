import Modal from "@/Components/Modal/Modal";
import { MouseEventHandler } from "react";

const ModalPayment = ({
  modal,
  handler,
}: {
  modal: string;
  handler: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      {modal === "payment" && (
        <Modal>
          <Modal.Header text="Pagos" />
          <Modal.Body>Payment</Modal.Body>
          <Modal.Footer handler={handler} text="Hacer algo!" />
        </Modal>
      )}
    </>
  );
};

export default ModalPayment;
