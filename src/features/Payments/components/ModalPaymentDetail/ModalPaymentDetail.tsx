import Modal from "../../../../Components/Modal/screen/Modal";

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
  paymentData?: TableDataType | undefined;
  closeHandler?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ModalPaymentDetail = ({
  isOpen,
  paymentData,
  closeHandler,
}: ModalReportType) => {
  return (
    <>
      {isOpen == "Payments" && (
        <Modal title="Pago" buttonText="Cerrar" handler={closeHandler}>
          <div>{paymentData?.Total}</div>
        </Modal>
      )}
    </>
  );
};

export default ModalPaymentDetail;
