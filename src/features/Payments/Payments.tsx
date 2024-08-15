import { useState } from "react";
import Data from "../Payments/utils/MOCK_DATA (2).json";
import ModalPayment from "./components/ModalPayment/ModalPayment";
import ModalExpenses from "./components/ModalExpenses/ModalExpenses";
import ModalAgreement from "./components/ModalAgreement/ModalAgreement";
import ButtonsForModals from "./components/ButtonsForModals/ButtonsForModals";
import PagesContentTemplate from "../../Components/PagesContentTemplate/PagesContentTemplate";

const Payments = () => {
  const [modal, setModal] = useState<string>("");

  return (
    <PagesContentTemplate>
      <ModalPayment isOpen={modal} closeModal={() => setModal("")} />
      <ModalExpenses isOpen={modal} closeModal={() => setModal("")} />
      <ModalAgreement isOpen={modal} closeModal={() => setModal("")} />
      <PagesContentTemplate.InputContainer>
        <ButtonsForModals
          setModalExpenses={() => setModal("expense")}
          setModalAgreement={() => setModal("agreement")}
          setModalPayment={() => setModal("payment")}
        />
      </PagesContentTemplate.InputContainer>
      <PagesContentTemplate.TableContainer
        headersWeb={["Casa", "Estado", "Total", "Fecha", "Herramientas"]}
        headersMobile={["Casa", "Fecha", "Total"]}
        data={Data}
      />
    </PagesContentTemplate>
  );
};

export default Payments;