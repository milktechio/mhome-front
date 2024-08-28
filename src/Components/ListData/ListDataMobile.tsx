import { TableDataType } from "../../utils/types/tableData.types";
import ListItem from "./components/ListItem";
import styles from "./ListDataMobile.module.css";

const ListDataMobile = ({
  tableData,
  headers,
}: {
  tableData: TableDataType[];
  headers: string[];
}) => {
  return (
    <div className={styles.listMobileContainer}>
      <div className={styles.listMobileMain}>
        {tableData.map((house, i) => {
          return (
            <ListItem key={`neighbor-${i}`} data={house} headers={headers} />
          );
        })}
      </div>
    </div>
  );
};

export default ListDataMobile;
