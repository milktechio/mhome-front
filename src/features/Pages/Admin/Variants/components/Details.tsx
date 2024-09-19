// @ts-nocheck
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
  const show = neighbors?.filter((e) => {
    return e.id === modal;
  });

  console.log("data", show);
  return <></>;
};

export default ModalNeighborDetail;
