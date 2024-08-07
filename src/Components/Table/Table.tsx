import { TableData } from "../../utils/types/tableData.types";
import { TableDataType } from "../../utils/types/tableData.types";
import ButtonViewTable from "../Buttons/ButtonViewTable/ButtonViewTable";
import styles from "./Table.module.css";

const Table = ({ headers, handler, tableData }: TableData) => {
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.tableMain}>
          <thead className={styles.tableHeader}>
            <tr>
              {headers.map((head, i) => {
                return <th key={`table-headers-${i}`}>{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data: TableDataType, i: number) => {
              return (
                <tr key={`row-table-${i}`}>
                  {Object.keys(data).map((el, i) => {
                    //@ts-expect-error this datatype is defined by TableDataType
                    return <td key={`datum-${i}`}>{data[el]}</td>;
                  })}
                  <td>
                    <div className="tools-container">
                      <ButtonViewTable handler={handler} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
