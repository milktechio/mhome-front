import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import Data from "./MOCK_DATA (2).json";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";

const Neighbors = () => {
  const screen = useScreenDimentions();
  return (
    <PageContentDist>
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Vecinos" />
        {screen.width > 768 && <InputSearch />}
        {screen.width <= 768 && <ButtonSquare />}
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Casa", "Nombre", "Correo", "Telefono", "Detalle"]}
            tableData={Data}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Casa", "Nombre", "email"]}
            tableData={Data}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
