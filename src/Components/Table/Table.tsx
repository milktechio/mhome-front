// @ts-nocheck
import ButtonViewTable from "../Buttons/ButtonViewTable/ButtonViewTable";
import styles from "./Table.module.css";

const Table = ({ headers, handler, tableData }: any) => {
  const handleClick = (data: string) => {
    handler(data);
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.tableMain}>
          <thead className={styles.tableHeader}>
            <tr>
              {headers?.map((head, i) => {
                return <th key={`table-headers-${i}`}>{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, i) => {
              return (
                <tr key={`row-table-${i}`}>
                  {Object?.keys(data)?.map((el, i) => {
                    return el === "id" ? <></> : <td>{data[el]}</td>;
                  })}
                  <td>
                    <div className={styles.toolsContainer}>
                      <ButtonViewTable handler={() => handleClick(data.id)} />
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
