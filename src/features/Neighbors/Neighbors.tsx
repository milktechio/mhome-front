import { FC } from "react";
import Page from "../../Components/Page/Page";
import Data from "./utils/MOCK_DATA (2).json";
import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";

const Neighbors = (): ReturnType<FC> => {
  return (
    <Page>
      <Page.InputContainer>
        <InputSearch placeholderText="Buscar" />
      </Page.InputContainer>
      <Page.TableContainer
        headersWeb={["Casa", "Nombre", "Correo", "Telefono", "Herramientas"]}
        headersMobile={["Casa", "Nombre", "email"]}
        data={Data}
      />
    </Page>
  );
};

export default Neighbors;
