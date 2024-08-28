import Modal from "@/Components/Modal/Modal";
import { MouseEventHandler } from "react";

const ModalExpenses = ({
  modal,
  handler,
}: {
  modal: string;
  handler: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      {modal === "expenses" && (
        <Modal>
          <Modal.Header text="Gastos" />
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer handler={handler} text="Hacer algo!" />
        </Modal>
      )}
    </>
  );
};

export default ModalExpenses;
