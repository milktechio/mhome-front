import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";
import React from "react";

const ModalNeighborDetail = ({
  neighbors,
  modal,
  close,
}: {
  neighbors?: any;
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const show = neighbors?.filter((e: any) => {
    return e.id === modal;
  });

  return (
    <>
      {modal === show[0]?.id && (
        <Modal>
          <Modal.Header text="Vecino" />
          <Modal.Body>
            <Card>
              <Card.Avatar image="#" />
              <Card.Body>
                <Card.Input placeholderText={show[0]?.name} text="Nombre:" />
                <Card.Input
                  placeholderText={show[0]?.mobile}
                  text="Telefono:"
                />
                <Card.Input placeholderText={show[0]?.email} text="Email:" />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer text="detalle" close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalNeighborDetail;
