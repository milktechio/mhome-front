import Modal from "@/Components/Modal/Modal";
import { getVoting, postVote } from "@/redux/features/vote/voteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import React, { useEffect, useState } from "react";

const ModalViewVoteDetail = ({
  voting,
  modal,
  close,
}: {
  voting?: any;
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [vote, setVote] = useState<string>("");

  const dispatch = useAppDispatch();

  const votedOption = useAppSelector((state) => state.vote.dataGetVoting);

  const show = voting
    ? voting?.filter((vote) => {
        return vote?.id === modal;
      })
    : [""];

  const data = {
    id: show[0]?.id,
    option: vote,
  };
  console.log(votedOption);

  useEffect(() => {
    dispatch(getVoting(show[0]?.id));
    if (vote) {
      setVote("");
    }
  }, []);

  return (
    <>
      {modal === show[0]?.id && (
        <Modal>
          <Modal.Header text={show[0]?.title} />
          <Modal.Body>
            <Modal.DetailView image={show[0]?.image} />
            <Modal.ShowDataText text={`Finaliza en: ${show[0]?.date_end}`} />
            {!vote && (
              <Modal.Vote
                handler={(e) => setVote(e.target.value)}
                options={show[0]?.options}
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
