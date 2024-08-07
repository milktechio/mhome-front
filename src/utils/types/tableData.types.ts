export type TableDataType = {
  Id?: number;
  Total?: string;
  Estado?: string;
  Fecha?: string;
  Casa?: number;
  Nombre?: string;
  email?: string;
  Telefono?: string;
};

export type TableData = {
  headers: string[];
  tableData: TableDataType[];
  handler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
