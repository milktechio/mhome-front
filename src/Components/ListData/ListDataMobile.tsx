import { MouseEventHandler } from "react";
import ListItem from "./components/ListItem";
import styles from "./ListDataMobile.module.css";
import { TableDataType } from "@/utils/types/tableData.types";

const ListDataMobile = ({
  tableData,
  headers,
  handler,
}: {
  tableData: TableDataType[];
  headers: string[];
  handler(data: string): MouseEventHandler<HTMLDivElement>;
}) => {
  const handleClick = (data: string) => {
    handler(data);
  };

  return (
    <div className={styles.listMobileContainer}>
      <div className={styles.listMobileMain}>
        {tableData?.map((tableCell, i) => {
          return (
            <ListItem
              key={`data-${i}`}
              data={tableCell}
              headers={headers ?? []}
              handler={() => handleClick(tableCell.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListDataMobile;
