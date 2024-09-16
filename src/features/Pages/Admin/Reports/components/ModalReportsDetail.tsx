import { useState } from "react";
import { updateReportStatus } from "@/redux/features/report/reportSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
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
  const [selectedOption, setSelectedOption] = useState("");


  const dispatch = useAppDispatch();

  const show = reports?.filter((report) => {
    return report.id === modal;
  });

  console.log(selectedOption);
  return (
    <>
      {modal === show[0]?.id && (
        <Modal>
          <Modal.Header text="Detalles" />
          <Modal.Body>
            <Modal.DetailView image={show[0].image} />
            <Modal.Text text={show[0].description} />
            <Modal.EditComponent
              handler={(e) => setSelectedOption(e.target.value)}
              text={show[0].status}
            />
          </Modal.Body>
          <Modal.Footer
            text="Guardar"
            close={close}
            handler={() => {
              dispatch(
                updateReportStatus({
                  id: show[0]?.id,
                  status: selectedOption,
                })
              );
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalReportsDetail;
