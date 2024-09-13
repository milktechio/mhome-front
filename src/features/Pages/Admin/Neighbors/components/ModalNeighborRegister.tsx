import { useAppDispatch } from "@/redux/hooks/hooks";
import { useState } from "react";
import { registerUser } from "@/redux/features/user/userSlice";
import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";

const ModalNeighborRegister = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [username, setUserName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPasword, setConfirmPasword] = useState<string>("");

  const dispatch = useAppDispatch();

  const data = {
    username: username,
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    confirmpassword: confirmPasword,
  };

  return (
    <>
      {modal === "register" && (
        <Modal>
          <Modal.Header text="Registra a un vecino" />
          <Modal.Body>
            <PageContentDist>
              <PageContentDist.Main>
                <Card>
                  <Card.Header title="Datos requeridos" />
                  <Card.Body>
                    <Card.Input
                      inputValue={name}
                      handler={(e) => setName(e.target.value)}
                      placeholderText="username"
                    />
                    <Card.Input
                      inputValue={username}
                      handler={(e) => setUserName(e.target.value)}
                      placeholderText="name"
                    />
                    <Card.Input
                      inputValue={lastname}
                      handler={(e) => setLastname(e.target.value)}
                      placeholderText="lastname"
                    />
                    <Card.Input
                      inputValue={email}
                      handler={(e) => setEmail(e.target.value)}
                      placeholderText="email"
                    />
                    <Card.Input
                      inputValue={password}
                      handler={(e) => setPassword(e.target.value)}
                      placeholderText="password"
                    />
                    <Card.Input
                      inputValue={confirmPasword}
                      handler={(e) => setConfirmPasword(e.target.value)}
                      placeholderText="confirm password"
                    />
                  </Card.Body>
                </Card>
              </PageContentDist.Main>
            </PageContentDist>
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
