import Table from "../../Components/Table/Table";
import InputSearch from "../../Components/Inputs/InputSearch/InputSearch";
import Data from "./utils/MOCK_DATA (2).json";
import styles from "./Neighbors.module.css";

const Neighbors = () => {
  return (
    <>
      <div className={styles.inputDisplayContainer}>
        <InputSearch placeholderText="Buscar" />
      </div>
      <Table
        headers={["Casa", "Nombre", "Correo", "Telefono", "Herramientas"]}
        tableData={Data}
      />
    </>
  );
};

export default Neighbors;
