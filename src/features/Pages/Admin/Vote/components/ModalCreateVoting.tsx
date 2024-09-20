import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";
import { createVoting } from "@/redux/features/vote/voteSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import React, { useState } from "react";

const ModalCreateVoting = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [options, setOption] = useState<string>("");
  const [minimum, setMinimun] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const dispatch = useAppDispatch();

  const data = {
    title: title,
    description: description,
    options: options,
    minimum_participations: minimum,
    status: status,
    date_end: dateEnd,
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
      {modal === "voting" && (
        <Modal>
          <Modal.Header text="CREAR VOTACION" />
          <Modal.Body>
            <Card>
              <Card.Body>
                <Card.Input
                  text="titulo"
                  placeholderText={"titulo"}
                  handler={(e) => setTitle(e.target.value)}
                />
                <Card.Input
                  text="description"
                  placeholderText={"descripcion"}
                  handler={(e) => setDescription(e.target.value)}
                />
                <Card.Input
                  text="lastname"
                  placeholderText={"opciones"}
                  handler={(e) => setOption(e.target.value)}
                />
                <Card.Input
                  text="participaciones minimas"
                  placeholderText={"participaciones minimas"}
                  handler={(e) => setMinimun(e.target.value)}
                />
                <Card.Input
                  text="status"
                  placeholderText={"status"}
                  handler={(e) => setStatus(e.target.value)}
                />
                <Card.Input
                  text="termina"
                  placeholderText={"termina"}
                  handler={(e) => setDateEnd(e.target.value)}
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
            text="Registrar"
            handler={() => {
              dispatch(createVoting(data));
            }}
            close={close}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalCreateVoting;
