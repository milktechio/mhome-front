import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";
import { createVoting } from "@/redux/features/vote/voteSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import React, { useEffect, useState } from "react";

const ModalCreateVoting = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    options: "",
    minimum_participations: "",
    status: "",
    date_end: "",
    image: null,
  });

  console.log(data);

  const dispatch = useAppDispatch();

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
                  handler={(e) => setData({ title: e.target.value })}
                />
                <Card.Input
                  text="name"
                  placeholderText={"descripcion"}
                  handler={(e) => setData({ description: e.target.value })}
                />
                <Card.Input
                  text="lastname"
                  placeholderText={"opciones"}
                  handler={(e) => setData({ options: e.target.value })}
                />
                <Card.Input
                  text="email"
                  placeholderText={"participaciones minimas"}
                  handler={(e) =>
                    setData({ minimum_participations: e.target.value })
                  }
                />
                <Card.Input
                  text="password"
                  placeholderText={"status"}
                  handler={(e) => setData({ status: e.target.value })}
                />
                <Card.Input
                  text="termina"
                  placeholderText={"termina"}
                  handler={(e) => setData({ date_end: e.target.value })}
                />
                <Card.UpLoadFile
                  handler={(e) => {
                    setData({ image: e?.target?.files[0] });
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

//const [fields, setFields] = useState<any>([]);
// const [data, setData] = useState<any>({});

// useEffect(() => {
//   setFields([
//     {
//       name: "username",
//       label: "Nombre de usuario",
//       defaultValue: "",
//       required: true,
//     },
//     {
//       name: "name",
//       label: "Nombre",
//       defaultValue: "",
//       required: true,
//     },
//     {
//       name: "lastname",
//       label: "Apellido",
//       defaultValue: "",
//       required: true,
//     },
//     {
//       name: "email",
//       label: "Correo electrónico",
//       defaultValue: "",
//       required: true,
//     },
//     {
//       name: "password",
//       label: "Contraseña",
//       defaultValue: "",
//       required: true,
//       password: true,
//     },
//     {
//       name: "confirmPasword",
//       label: "Confirmar contraseña",
//       defaultValue: "",
//       password: true,
//       required: true,
//     },
//   ]);
// }, []);
