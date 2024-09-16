import { postNewReport } from "@/redux/features/report/reportSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
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
  const [image, setImage] = useState<FileList>(null);
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.user.payloadLogin);

  const report = {
    token: token,
    description: description,
    image: image,
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

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
                    setImage(e?.target?.files[0]);
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
