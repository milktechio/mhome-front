import { postNewReport } from "@/redux/features/report/reportSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";
import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";

const ModalCreateReport = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.user.payloadLogin);

  const report = {
    token: token,
    description: description,
    image: image,
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setImage(fileUrl);
    }
  };

  return (
    <>
      {modal === "report" && (
        <Modal>
          <Modal.Header text="Reporte nuevo" />
          <Modal.Body>
            <Card>
              <Card.Header title="Asigna nuevo reporte" />
              <Card.Body>
                <Card.InputTextArea
                  text="Descripcion"
                  handler={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <Card.UpLoadFile
                  handler={(e) => {
                    handleFileChange(e);
                  }}
                />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer
            text="Reporte nuevo"
            close={close}
            handler={() => {
              dispatch(postNewReport(report));
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalCreateReport;
