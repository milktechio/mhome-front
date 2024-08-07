import { TableDataType } from "../../../utils/types/tableData.types";
import ListItem from "./components/ListItem";
import styles from "./ListDataMobile.module.css";

const ListDataMobile = ({ tableData }: { tableData: TableDataType[] }) => {
  return (
    <div className={styles.listMobileContainer}>
      <div className={styles.listMobileMain}>
        {tableData.map((house, i) => {
          return (
            <ListItem
              key={`neighbor-${i}`}
              Casa={house.Casa}
              email={house.email}
              Nombre={house.Nombre}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListDataMobile;
