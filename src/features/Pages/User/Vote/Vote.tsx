import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";
import ModalCreateVoting from "./components/ModalCreateVoting";
// import ModalViewVoteDetail from "./components/ModalViewVoteDetail";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import { getVotes } from "@/redux/features/vote/voteSlice";
import Data from "./MOCK_DATA (2).json";

const Vote = () => {
  const [modal, setModal] = useState<string>("");

  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const voting = useAppSelector((state) => state.vote.dataGetVotes);

  useEffect(() => {
    dispatch(getVotes());
  }, [dispatch]);

  console.log(voting);
  return (
    <PageContentDist>
      <ModalCreateVoting modal={modal} close={() => setModal("")} />
      {/* <ModalViewVoteDetail modal={modal} close={() => setModal("")} /> */}
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
        <ListDataMobile headers={["Titulo", "Comunidad"]} tableData={Data} />
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Vote;
