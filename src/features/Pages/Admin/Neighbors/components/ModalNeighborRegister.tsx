import { useAppDispatch } from "@/redux/hooks/hooks";
import { useState, useEffect } from "react";
import { registerUser } from "@/redux/features/user/userSlice";
import Modal from "@/Components/Modal/Modal";
import Card from "@/Components/Card/Card";

const fields = [
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
];

const ModalNeighborRegister = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [data, setData] = useState<any>({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpasword: "",
  });

  const dispatch = useAppDispatch();

  return (
    <>
      {modal === "register" && (
        <Modal>
          <Modal.Header text="Registra a un vecino" />
          <Modal.Body>
            <Card>
              <Card.Body>
                <Card.Input
                  text="username"
                  placeholderText={"username"}
                  handler={(e) => setData({ username: e.target.value })}
                />
                <Card.Input
                  text="name"
                  placeholderText={"name"}
                  handler={(e) => setData({ name: e.target.value })}
                />
                <Card.Input
                  text="lastname"
                  placeholderText={"lastname"}
                  handler={(e) => setData({ lastname: e.target.value })}
                />
                <Card.Input
                  text="email"
                  placeholderText={"email"}
                  handler={(e) => setData({ name: e.target.value })}
                />
                <Card.Input
                  text="password"
                  placeholderText={"password"}
                  handler={(e) => setData({ name: e.target.value })}
                />
                <Card.Input
                  text="confirm password"
                  placeholderText={"confirm password"}
                  handler={(e) => setData({ name: e.target.value })}
                />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer
            text="Registrar"
            handler={() => dispatch(registerUser(data))}
            close={close}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalNeighborRegister;
