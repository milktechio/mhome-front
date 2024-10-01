import { useEffect, useState } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getVariants } from "@/redux/features/variant/variantSlice";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import Buy from "./components/Buy";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Neighbors = () => {
  const { id } = useParams();

  const [modal, setModal] = useState<string>("");

  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const variants = useAppSelector((state) => state?.variant?.dataGetVariants);

  const dataLink = useAppSelector(
    (state) => state?.variant?.dataGetVariantLink
  );

  useEffect(() => {
    if (dataLink?.url) {
      window.open(dataLink.url, "_blank");
    }
  }, [dataLink]);

  const neighbors = variants.map((el) => {
    let fecha = el.purchases?.[0]?.created_at;

    if (fecha) {
      fecha = new Date(fecha);

      if (el.recurring === "monthly") {
        fecha.setMonth(fecha.getMonth() + 1);
      } else if (el.recurring === "yearly") {
        fecha.setFullYear(fecha.getFullYear() + 1);
      }

      fecha = fecha.toLocaleDateString();
    }

    return {
      id: el.id,
      name: el.name,
      content: el.content,
      price: el.price,
      recurring: el.recurring,
      fecha: fecha ?? "-",
    };
  });

  const ComprarHandler = (dataId: string) => {
    const variant = variants.find((el) => el.purchases?.length > 0);

    if (variant) {
      return toast.success("Ya tienes una suscripción activa", {
        theme: "dark",
      });
    }
    setModal(dataId);
  };

  useEffect(() => {
    id && dispatch(getVariants(id));
  }, [dispatch, id]);

  return (
    <PageContentDist>
      <Buy modal={modal} close={() => setModal("")} variants={variants} />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Tarifas" />
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={[
              "Nombre",
              "Contenido",
              "Precio",
              "Recurrencia",
              "Vencimiento",
              "Detalles",
            ]}
            tableData={neighbors}
            handler={ComprarHandler as any}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Nombre", "Contenido", "Precio", "Recurrencia"]}
            tableData={neighbors}
            handler={ComprarHandler as any}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Neighbors;
