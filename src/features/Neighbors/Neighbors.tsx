import { FC } from "react";
import { useScreenDimentions } from "../../utils/hooks/useScreenDimentions";
import Table from "../../Components/Table/Table";
import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";
import Data from "./utils/MOCK_DATA (2).json";
import styles from "./Neighbors.module.css";
import ListDataMobile from "../../Components/Table/ListDataMobile/ListDataMobile";

const Neighbors = (): ReturnType<FC> => {
  const screen = useScreenDimentions();
  return (
    <>
      <div className={styles.inputDisplayContainer}>
        <InputSearch placeholderText="Buscar" />
      </div>
      {screen.width < 768 && (
        <ListDataMobile
          headers={["Casa", "Nombre", "email"]}
          tableData={Data}
        />
      )}
      {screen.width > 768 && (
        <Table
          headers={["Casa", "Nombre", "Correo", "Telefono", "Herramientas"]}
          tableData={Data}
        />
      )}
    </>
  );
};

export default Neighbors;
