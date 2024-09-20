import { useEffect } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getProducts } from "@/redux/features/product/productSlice";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import { useNavigate } from "react-router-dom"; // Importa useNavigate de React Router

const Neighbors = () => {
  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Inicializa useNavigate

  const data = useAppSelector((state) =>
    state?.product?.dataGetProducts.map((e) => {
      return {
        id: e.id,
        name: e.name,
        content: e.content,
      };
    })
  );

  // Manejador para redirigir al detalle de membresía
  const modalNeighborDetailHandler = (dataId: string) => {
    navigate(`/admin-membership/${dataId}`); // Redirige a la ruta con el ID correspondiente
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <PageContentDist>
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Membresias" />
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Nombre", "Contenido", "Detalle"]}
            tableData={data}
            //@ts-expect-error solo se pasa la funcion
            handler={modalNeighborDetailHandler}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Name", "Contenido"]}
            tableData={data}
            //@ts-expect-error solo se pasa la funcion
            handler={modalNeighborDetailHandler}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
