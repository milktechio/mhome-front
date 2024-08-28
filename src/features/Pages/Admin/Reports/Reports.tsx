import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import Data from "./MOCK_DATA (2).json";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import ListDataMobile from "@/Components/ListData/ListDataMobile";

const Reports = () => {
  const screen = useScreenDimentions();
  return (
    <PageContentDist>
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Reportes" />
        {screen.width > 768 && <InputSearch />} 
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Id", "Estado", "Fecha", "Detail"]}
            tableData={Data}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Id", "Estado", "Fecha"]}
            tableData={Data}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Reports;
