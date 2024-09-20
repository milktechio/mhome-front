import { useAppDispatch } from "@/redux/hooks/hooks";
import { useState } from "react";
import { registerUser } from "@/redux/features/user/userSlice";
import Modal from "@/Components/Modal/Modal";
import Card from "@/Components/Card/Card";

export type NeighborsProps = {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmpasword: string;
};

const ModalNeighborRegister = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [username, setUserName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const data: {
    username: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
  } = {
    username: username,
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    confirmpassword: confirmpassword,
  };

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
                  handler={(e) => setUserName(e.target.value)}
                />
                <Card.Input
                  text="name"
                  placeholderText={"name"}
                  handler={(e) => setName(e.target.value)}
                />
                <Card.Input
                  text="lastname"
                  placeholderText={"lastname"}
                  handler={(e) => setLastName(e.target.value)}
                />
                <Card.Input
                  text="email"
                  placeholderText={"email"}
                  handler={(e) => setEmail(e.target.value)}
                />
                <Card.Input
                  text="password"
                  placeholderText={"password"}
                  handler={(e) => setPassword(e.target.value)}
                />
                <Card.Input
                  text="confirm password"
                  placeholderText={"confirm password"}
                  handler={(e) => setConfirmPassword(e.target.value)}
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
