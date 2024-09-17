import Builder from "@/Components/forms";
import Modal from "@/Components/Modal/Modal";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import React, { useEffect, useState } from "react";

const ModalCreateVoting = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [fields, setFields] = useState<any>([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setFields([
      {
        name: "username",
        label: "Nombre de usuario",
        defaultValue: "",
        required: true,
      },
      {
        name: "name",
        label: "Nombre",
        defaultValue: "",
        required: true,
      },
      {
        name: "lastname",
        label: "Apellido",
        defaultValue: "",
        required: true,
      },
      {
        name: "email",
        label: "Correo electrónico",
        defaultValue: "",
        required: true,
      },
      {
        name: "password",
        label: "Contraseña",
        defaultValue: "",
        required: true,
        password: true,
      },
      {
        name: "confirmPasword",
        label: "Confirmar contraseña",
        defaultValue: "",
        password: true,
        required: true,
      },
    ]);
  }, []);

  return (
    <>
      {modal === "voting" && (
        <Modal>
          <Modal.Header text="CREAR VOTACION" />
          <Modal.Body>
            <PageContentDist>
              <PageContentDist.Main>
                
              </PageContentDist.Main>
            </PageContentDist>
          </Modal.Body>
          <Modal.Footer text="Registrar" handler={() => {}} close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalCreateVoting;
