import Modal from "@/Components/Modal/Modal";
import { ReportsProps } from "@/features/Pages/Admin/Reports/components/ModalReportsDetail";
import { useEffect } from "react";

const ModalReportsDetail = ({
  reports,
  modal,
  close,
}: {
  reports?: ReportsProps[];
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const show = reports?.filter((e) => {
    return e.id === modal;
  });

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      {modal === (show ?? [])[0]?.id && (
        <Modal>
          <Modal.Header text="Detalles" />
          <Modal.Body>
            <Modal.DetailView
              image={(show ?? [])[0]?.image}
            />
            <Modal.ShowDataText text={(show ?? [])[0]?.description}/>
          </Modal.Body>
          <Modal.Footer text="Detalles" close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalReportsDetail;
