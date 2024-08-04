import Modal from "../../../../Components/Modal/screen/Modal";
import "./ModalReport.css";

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

type ModalReportType = {
  isOpen: string;
  reportData?: TableDataType | undefined;
  closeHandler?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ModalReportDetail = ({
  isOpen,
  reportData,
  closeHandler,
}: ModalReportType) => {
  return (
    <>
      {isOpen === "Reports" && (
        <Modal title="Reports" buttonText="Cerrar" handler={closeHandler}>
          <div className="report-modal-container">{reportData?.Fecha}</div>
        </Modal>
      )}
    </>
  );
};

export default ModalReportDetail;
