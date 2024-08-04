import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";
import Table from "../../Components/Table/Table";
import Data from "./utils/MOCK_DATA (2).json";
import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <>
      <div className={styles.inputDisplayContainer}>
        <InputSearch placeholderText="Buscar" />
      </div>
      <Table
        headers={["Id", "Estado", "Fecha", "Herramientas"]}
        tableData={Data}
      />
    </>
  );
};

export default Reports;
