import { TableDataType } from "../../../../utils/types/tableData.types";
import styles from "./ListItem.module.css";

const ListItem = ({
  headers,
  data,
}: {
  headers: string[];
  data: TableDataType;
}) => {
  return (
    <div className={styles.listMobileItem}>
      {headers.map((header, i) => {
        return (
          <div key={`list-item-${i}`}>
            {header}: {String(data[header]).substring(0, 18)}
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
