import ListDataMobile from "@/Components/ListData/ListDataMobile";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";

const PaymentsUser = () => {
  const screen = useScreenDimentions();
  return (
    <PageContentDist>
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Pagos" />
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Pago", "Concepto", "Monto", "Detalle"]}
            tableData={[
              { Pago: 1, Concepto: "algo", Monto: 2342 },
              { Pago: 2, Concepto: "algo", Monto: 2342 },
              { Pago: 3, Concepto: "algo", Monto: 2342 },
              { Pago: 4, Concepto: "algo", Monto: 2342 },
              { Pago: 5, Concepto: "algo", Monto: 2342 },
              { Pago: 6, Concepto: "algo", Monto: 2342 },
              { Pago: 7, Concepto: "algo", Monto: 2342 },
              { Pago: 8, Concepto: "algo", Monto: 2342 },
              { Pago: 9, Concepto: "algo", Monto: 2342 },
            ]}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Pago", "Concepto", "Monto"]}
            tableData={[
              { Pago: 1, Concepto: "algo", Monto: 2342 },
              { Pago: 2, Concepto: "algo", Monto: 2342 },
              { Pago: 3, Concepto: "algo", Monto: 2342 },
              { Pago: 4, Concepto: "algo", Monto: 2342 },
              { Pago: 5, Concepto: "algo", Monto: 2342 },
              { Pago: 6, Concepto: "algo", Monto: 2342 },
              { Pago: 7, Concepto: "algo", Monto: 2342 },
              { Pago: 8, Concepto: "algo", Monto: 2342 },
              { Pago: 9, Concepto: "algo", Monto: 2342 },
            ]}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default PaymentsUser;
