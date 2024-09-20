import { TableDataType } from "../../../utils/types/tableData.types";
import styles from "./ListItem.module.css";

const ListItem = ({
  headers,
  data,
  handler,
}: {
  headers?: string[];
  data?: TableDataType;
  handler?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className={styles.listMobileItem}>
      {headers?.map((header, i) => {
        return (
          <div key={`list-item-${i}`} onClick={handler}>
            {header}:{" "}
            {String((data ?? {})[Object.keys(data ?? {})[i] ?? ""]).substring(
              0,
              18
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
