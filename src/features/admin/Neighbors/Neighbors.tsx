import { FC } from "react";
import Data from "./utils/MOCK_DATA (2).json";
import InputSearch from "../../../Components/Inputs/InputSearch/InputSearch";
import PagesContentTemplate from "../../../Components/PagesContentTemplate/PagesContentTemplate";

const Neighbors = (): ReturnType<FC> => {
  return (
    <PagesContentTemplate>
      <PagesContentTemplate.InputContainer>
        <InputSearch placeholderText="Buscar" />
      </PagesContentTemplate.InputContainer>
      <PagesContentTemplate.TableContainer
        headersWeb={["Casa", "Nombre", "Correo", "Telefono", "Herramientas"]}
        headersMobile={["Casa", "Nombre", "email"]}
        data={Data}
      />
    </PagesContentTemplate>
  );
};

export default Neighbors;
