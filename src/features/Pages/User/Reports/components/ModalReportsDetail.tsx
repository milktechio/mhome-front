import Modal from "@/Components/Modal/Modal";

const ModalReportsDetail = ({
  reports,
  modal,
  close,
}: {
  reports?: any;
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  
  const show = reports?.filter((e) => {
    return e.id === modal;
  });

  return (
    <>
      {modal === show[0]?.id && (
        <Modal>
          <Modal.Header text="Detalles" />
          <Modal.Body>
            <Modal.DetailView
              image={show[0].image}
              description={show[0].description}
            />
          </Modal.Body>
          <Modal.Footer text="Detalles" close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalReportsDetail;
