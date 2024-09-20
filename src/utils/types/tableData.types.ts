export type TableDataType = {
  Id?: number | string;
  Total?: string;
  Estado?: string;
  Fecha?: string;
  Casa?: number;
  Nombre?: string;
  email?: string;
  Telefono?: string;
  [key: string]: any;
};

export type TableData = {
  headers: string[];
  tableData: TableDataType[];
  handler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
