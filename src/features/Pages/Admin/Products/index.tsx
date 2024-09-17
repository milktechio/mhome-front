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

  const users = useAppSelector((state) =>
    state?.user?.dataGetUsers
      .map((el) => {
        return el.profile;
      })
      .filter((user) => user !== null)
  );

  const neighbors = users.map((el, i) => {
    return {
      vecino: i + 1,
      name: el.name,
      email: el.email,
      id: el.id,
      lastname: el.lastname,
    };
  });

  const modalNeighborDetailHandler = (dataId: string) => {
    setModal(dataId);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <PageContentDist>
      <ModalNeighborRegister modal={modal} close={() => setModal("")} />
      <ModalNeighborDetail
        modal={modal}
        close={() => setModal("")}
        neighbors={users}
      />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Products" />
        {screen.width > 768 && (
          <>
            <PageContentDist.HeaderButtons>
              <ButtonPrimary
                text="Registrar producto"
                handler={() => {
                  setModal("register");
                }}
              />
            </PageContentDist.HeaderButtons>
            <InputSearch />
          </>
        )}
        {screen.width <= 768 && <ButtonSquare />}
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Vecino", "Nombre", "Apellido", "Email", "Detalle"]}
            tableData={neighbors}
            handler={modalNeighborDetailHandler}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Casa", "Nombre", "email"]}
            tableData={neighbors}
            handler={modalNeighborDetailHandler}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
