import { useState } from "react";
import Data from "../Payments/utils/MOCK_DATA (2).json";
import ModalPayment from "./components/ModalPayment/ModalPayment";
import ModalExpenses from "./components/ModalExpenses/ModalExpenses";
import ModalAgreement from "./components/ModalAgreement/ModalAgreement";
import ButtonsForModals from "./components/ButtonsForModals/ButtonsForModals";
import Page from "../../Components/Page/Page";

const Payments = () => {
  const [modal, setModal] = useState<string>("");

  return (
    <Page>
      <ModalPayment isOpen={modal} closeModal={() => setModal("")} />
      <ModalExpenses isOpen={modal} closeModal={() => setModal("")} />
      <ModalAgreement isOpen={modal} closeModal={() => setModal("")} />
      <Page.InputContainer>
        <ButtonsForModals
          setModalExpenses={() => setModal("expense")}
          setModalAgreement={() => setModal("agreement")}
          setModalPayment={() => setModal("payment")}
        />
      </Page.InputContainer>
      <Page.TableContainer
        headersWeb={["Casa", "Estado", "Total", "Fecha", "Herramientas"]}
        headersMobile={["Casa", "Fecha", "Total"]}
        data={Data}
      />
    </Page>
  );
};

export default Payments;