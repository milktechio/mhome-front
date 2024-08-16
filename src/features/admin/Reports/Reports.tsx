import InputSearch from "../../../Components/Inputs/InputSearch/InputSearch";
import PagesContentTemplate from "../../../Components/PagesContentTemplate/PagesContentTemplate";
import Data from "./utils/MOCK_DATA (2).json";

const Reports = () => {
  return (
    <PagesContentTemplate>
      <PagesContentTemplate.InputContainer>
        <InputSearch placeholderText="Buscar" />
      </PagesContentTemplate.InputContainer>
      <PagesContentTemplate.TableContainer
        data={Data}
        headersWeb={["Id", "Estado", "Fecha", "Herramientas"]}
        headersMobile={["Id", "Estado"]}
      />
    </PagesContentTemplate>
  );
};

export default Reports;
