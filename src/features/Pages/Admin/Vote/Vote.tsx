import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";
import ModalCreateVoting from "./components/ModalCreateVoting";
import { getVotes } from "@/redux/features/vote/voteSlice";
import Lists, { ListItems } from "@/Components/Lists/Lists";
import ModalViewVoteDetail from "./components/ModalViewVoteDetail";

export type VoteProps = {
  created_at: string;
  date_end: string;
  deleted_at: null;
  id: string;
  image: string;
  minimum_participations: 2;
  options: Array<string>;
  participations_count: 1;
  status: string;
  title: string;
  updated_at: string;
  user_id: string;
};

const Vote = () => {
  const [modal, setModal] = useState<string>("");

  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const voting: VoteProps[] = useAppSelector(
    (state) => state.vote.dataGetVotes.data
  );

  useEffect(() => {
    dispatch(getVotes());
  }, [dispatch]);

  console.log(voting);
  return (
    <PageContentDist>
      <ModalCreateVoting modal={modal} close={() => setModal("")} />
      <ModalViewVoteDetail
        voting={voting ? voting : [""]}
        modal={modal}
        close={() => setModal("")}
      />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Votaciones" />
        {screen.width > 768 && (
          <>
            <PageContentDist.HeaderButtons>
              <ButtonPrimary
                text="Crear votación"
                handler={() => {
                  setModal("voting");
                }}
              />
            </PageContentDist.HeaderButtons>
            <InputSearch />
          </>
        )}
        {screen.width <= 768 && (
          <>
            <ButtonSquare handler={() => setModal("voting")} />
            <ButtonSquare />
          </>
        )}
      </PageContentDist.Header>
      <PageContentDist.Main>
        <Lists>
          {voting?.map((vote, i) => {
            return (
              <ListItems
                key={`aslkdjf${i}`}
                handler={() => {
                  setModal(vote?.id);
                }}
                image={vote?.image}
                dateEnd={vote?.date_end}
                title={vote?.title}
              />
            );
          })}
        </Lists>
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Vote;
