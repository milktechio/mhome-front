import Modal from "@/Components/Modal/Modal";
import { getVoting, postVote } from "@/redux/features/vote/voteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import React, { useEffect, useMemo, useState } from "react";

const ModalViewVoteDetail = ({
  voting,
  modal,
  close,
}: {
  voting?: any[];
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [vote, setVote] = useState<string>("");
  const dispatch = useAppDispatch();
  const votedOption = useAppSelector((state) => state.vote.dataGetVoting);

  // Usar useMemo para memorizar el resultado de la búsqueda
  const show = useMemo(() => {
    return voting?.find((vote) => vote?.id === modal);
  }, [voting, modal]);

  const data = {
    id: show?.id,
    option: vote,
  };
  console.log(votedOption);

  useEffect(() => {
    if (show) {
      dispatch(getVoting(show.id));
    }
    // Limpiar el estado de voto al cambiar
    if (vote) {
      setVote("");
    }
  }, [dispatch, vote, show]); // Aseguramos que show esté en las dependencias

  return (
    <>
      {modal === show?.id && (
        <Modal>
          <Modal.Header text={show?.title} />
          <Modal.Body>
            <Modal.DetailView image={show?.image} />
            <Modal.ShowDataText text={`Finaliza en: ${show?.date_end}`} />
            {!vote && show?.options && (
              <Modal.Vote
                handler={(e) => setVote(e.target.value)}
                options={show.options}
              />
            )}
            {vote && (
              <Modal.ShowDataText
                text={`Votaste: ${vote ? vote : "aún no votas"}`}
              />
            )}
          </Modal.Body>
          <Modal.Footer
            handler={() => {
              dispatch(postVote(data));
            }}
            text="Votar!"
            close={close}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalViewVoteDetail;
