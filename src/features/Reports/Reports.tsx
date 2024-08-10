import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";
import Page from "../../Components/Page/Page";
import Data from "./utils/MOCK_DATA (2).json";

const Reports = () => {
  return (
    <Page>
      <Page.InputContainer>
        <InputSearch placeholderText="Buscar" />
      </Page.InputContainer>
      <Page.TableContainer
        data={Data}
        headersWeb={["Id", "Estado", "Fecha", "Herramientas"]}
        headersMobile={["Id", "Estado"]}
      />
    </Page>
  );
};

export default Reports;
