import ButtonViewTable from "../Buttons/ButtonViewTable/ButtonViewTable";
import "./Table.css";

type TableDataType = {
  Id?: number;
  Total?: string;
  Estado?: string;
  Fecha?: string;
  Casa?: number;
  Nombre?: string;
  Correo?: string;
  Telefono?: string;
};

type TableData = {
  headers: string[];
  tableData: TableDataType[];
  handler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Table = ({ headers, handler, tableData }: TableData) => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead className="header">
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
                      {/* <Button
                        image={View}
                        buttonStyle="Button-light-empty"
                        handler={handler}
                      /> */}
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
