import { useEffect, useState } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getUsers } from "@/redux/features/user/userSlice";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import ModalNeighborRegister from "./components/ModalNeighborRegister";
import ModalNeighborDetail from "./components/ModalNeighborDetail";

const Neighbors = () => {
  const [modal, setModal] = useState<string>("");

  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.user.payloadLogin);
  const users = useAppSelector((state) =>
    state?.user?.dataGetUsers
      .map((el) => {
        return {
          ...el.profile,
          purchases: el.purchases,
        } as any;
      })
      .filter((user) => user?.id)
  );

  const neighbors = users.map((el, i) => {
    return {
      vecino: i + 1,
      name: el.name,
      email: el.email,
      id: el.id,
      lastname: el.lastname,
      membresia: el.purchases?.price,
    };
  });

  const modalNeighborDetailHandler = (dataId: string) => {
    setModal(dataId);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, token]);

  return (
    <PageContentDist>
      <ModalNeighborRegister modal={modal} close={() => setModal("")} />
      <ModalNeighborDetail
        modal={modal}
        close={() => setModal("")}
        neighbors={users}
      />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Vecinos" />
        {screen.width > 768 && (
          <>
            <PageContentDist.HeaderButtons>
              <ButtonPrimary
                text="Registrar vecino"
                handler={() => {
                  setModal("register");
                }}
              />
            </PageContentDist.HeaderButtons>
            <InputSearch />
          </>
        )}
        {screen.width <= 768 && (
          <>
            <ButtonSquare
              handler={() => {
                setModal("register");
              }}
            />
            <ButtonSquare />
          </>
        )}
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={[
              "Vecino",
              "Nombre",
              "Apellido",
              "Email",
              "membresia",
              "Detalle",
            ]}
            tableData={neighbors}
            handler={modalNeighborDetailHandler}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Casa", "Nombre", "email", "Membresia"]}
            tableData={neighbors}
            handler={modalNeighborDetailHandler}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
