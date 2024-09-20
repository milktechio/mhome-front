import { useEffect, useState } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getVariants } from "@/redux/features/variant/variantSlice";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import Register from "./components/Register";
import { useParams } from "react-router-dom";

const Neighbors = () => {
  const { id } = useParams();

  const [modal, setModal] = useState<string>("");

  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const variants = useAppSelector((state) => state?.variant?.dataGetVariants);

  const neighbors = variants.map((el) => {
    return {
      name: el.name,
      content: el.content,
      price: el.price,
      recurring: el.recurring,
    };
  });

  const RegisterHandler = (dataId: string) => {
    setModal(dataId);
  };

  useEffect(() => {
    dispatch(getVariants(id ?? ""));
    console.log(id);
  }, [dispatch, id]);

  return (
    <PageContentDist>
      {/*<Details modal={modal} close={() => setModal("")} />*/}
      <Register modal={modal} close={() => setModal("")} />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Tarifas" />
        {screen.width > 768 && (
          <>
            <PageContentDist.HeaderButtons>
              <ButtonPrimary
                text="Registrar tarifa"
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
            headers={[
              "Nombre",
              "Contenido",
              "Precio",
              "Recurrencia",
              "Detalles",
            ]}
            tableData={neighbors}
            //@ts-expect-error solo se pasa la funcion
            handler={RegisterHandler}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Nombre", "Contenido", "Precio", "Recurrencia"]}
            tableData={neighbors}
            //@ts-expect-error solo se pasa la funcion
            handler={RegisterHandler}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
