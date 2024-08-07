import { useState } from "react";
import Data from "../Payments/utils/MOCK_DATA (2).json";
import Table from "../../Components/Table/Table";
import ModalPayment from "./components/ModalPayment/ModalPayment";
import ModalExpenses from "./components/ModalExpenses/ModalExpenses";
import ModalAgreement from "./components/ModalAgreement/ModalAgreement";
import ButtonsForModals from "./components/ButtonsForModals/ButtonsForModals";
import ListDataMobile from "../../Components/Table/ListDataMobile/ListDataMobile";
import { useScreenDimentions } from "../../utils/hooks/useScreenDimentions";

const Payments = () => {
  const [modal, setModal] = useState<string>("");
  const screen = useScreenDimentions();

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
      {screen.width < 768 && (
        <ListDataMobile headers={["Casa", "Fecha", "Total"]} tableData={Data} />
      )}
      {screen.width > 768 && (
        <Table
          headers={["Casa", "Estado", "Total", "Fecha", "Herramientas"]}
          tableData={Data}
        />
      )}
    </>
  );
};

export default Payments;
