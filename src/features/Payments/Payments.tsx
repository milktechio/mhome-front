import { useState } from "react";
import Data from "../Payments/utils/MOCK_DATA (2).json";
import Table from "../../Components/Table/Table";
import ModalPayment from "./components/ModalPayment/ModalPayment";
import ModalExpenses from "./components/ModalExpenses/ModalExpenses";
import ModalAgreement from "./components/ModalAgreement/ModalAgreement";
import ButtonsForModals from "./components/ButtonsForModals/ButtonsForModals";

const Payments = () => {
  const [modal, setModal] = useState<string>("");

  return (
    <>
      <ModalPayment isOpen={modal} closeModal={() => setModal("")} />
      <ModalExpenses isOpen={modal} closeModal={() => setModal("")} />
      <ModalAgreement isOpen={modal} closeModal={() => setModal("")} />
      <ButtonsForModals
        setModalExpenses={() => setModal("expense")}
        setModalAgreement={() => setModal("agreement")}
        setModalPayment={() => setModal("payment")}
      />
      <Table
        headers={["Casa", "Estado", "Total", "Fecha", "Herramientas"]}
        tableData={Data}
      />
    </>
  );
};

export default Payments;
