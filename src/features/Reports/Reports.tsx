import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";
import Table from "../../Components/Table/Table";
import Data from "./utils/MOCK_DATA (2).json";
import styles from "./Reports.module.css";
import ListDataMobile from "../../Components/Table/ListDataMobile/ListDataMobile";
import { useScreenDimentions } from "../../utils/hooks/useScreenDimentions";

const Reports = () => {
  const screen = useScreenDimentions();
  return (
    <>
      <div className={styles.inputDisplayContainer}>
        <InputSearch placeholderText="Buscar" />
      </div>
      {screen.width < 768 && (
        <ListDataMobile headers={["Id", "Estado"]} tableData={Data} />
      )}
      {screen.width > 768 && (
        <Table
          headers={["Id", "Estado", "Fecha", "Herramientas"]}
          tableData={Data}
        />
      )}
    </>
  );
};

export default Reports;
