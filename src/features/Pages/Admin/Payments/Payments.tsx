import { useState } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import Data from "./MOCK_DATA (2).json";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import ModalExpenses from "./components/ModalExpenses";
import ModalPayment from "./components/ModalPayment";
import ModalAgreement from "./components/ModalAgreement";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";

const Payments = () => {
  const [modal, setModal] = useState<string>("");
  const screen = useScreenDimentions();

  const voidCallback = () => {};
  return (
    <>
      <ModalExpenses modal={modal} handler={() => setModal("")} />
      <ModalPayment modal={modal} handler={() => setModal("")} />
      <ModalAgreement modal={modal} handler={() => setModal("")} />
      <PageContentDist>
        <PageContentDist.Header>
          <PageContentDist.HeaderTitle title="Pagos" />
          {screen.width > 768 && (
            <>
              <PageContentDist.HeaderButtons>
                <ButtonPrimary
                  handler={() => setModal("expenses")}
                  text="Gastos"
                />
                <ButtonPrimary
                  handler={() => setModal("agreement")}
                  text="Convenio"
                />
                <ButtonPrimary
                  handler={() => setModal("payment")}
                  text="Pago"
                />
              </PageContentDist.HeaderButtons>
              <InputSearch />
            </>
          )}
          {screen.width <= 768 && (
            <>
              <ButtonSquare handler={() => setModal("expenses")} />
              <ButtonSquare handler={() => setModal("agreement")} />
              <ButtonSquare handler={() => setModal("payment")} />
              <ButtonSquare />
            </>
          )}
        </PageContentDist.Header>
        <PageContentDist.Main>
          {screen.width > 768 && (
            <Table
              headers={["Casa", "Estado", "Total", "Fecha", "Detail"]}
              tableData={Data}
              handler={voidCallback as any}
            />
          )}
          {screen.width <= 768 && (
            <ListDataMobile
              headers={["Casa", "Total", "Fecha"]}
              tableData={Data}
              handler={voidCallback as any}
            />
          )}
        </PageContentDist.Main>
      </PageContentDist>
    </>
  );
};

export default Payments;
