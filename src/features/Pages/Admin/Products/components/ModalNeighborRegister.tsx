import { useAppDispatch } from "@/redux/hooks/hooks";
import { useState, useEffect } from "react";
import { registerUser } from "@/redux/features/user/userSlice";
import Modal from "@/Components/Modal/Modal";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import Builder from "@/Components/forms";

const ModalNeighborRegister = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [fields, setFields] = useState<[]>([]);
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  const dispatch = useAppDispatch();

  const handleSubmit = (data) => {};

  return (
    <>
      {modal === "register" && (
        <Modal>
          <Modal.Header text="Registra a un vecino" />
          <Modal.Body>
            <PageContentDist>
              <PageContentDist.Main>
                <div className="w-100">
                  <Builder fields={fields} onChange={setData} />
                </div>
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
