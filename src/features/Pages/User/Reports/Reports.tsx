import { useEffect, useState } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getReports } from "@/redux/features/user/userSlice";
import InputSearch from "@/Components/Inputs/InputSearch/InputSearch";
import Table from "@/Components/Table/Table";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import ListDataMobile from "@/Components/ListData/ListDataMobile";
import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import ModalCreateReport from "./components/ModalCreateReport";
import ModalReportsDetail from "./components/ModalReportsDetail";
import ButtonSquare from "@/Components/Buttons/ButtonSquare/ButtonSquare";
import reportsImg from "../../../../assets/SideBar/Reports.svg";
import search from "../../../../assets/Input/search.svg";

const Reports = () => {
  const [modal, setModal] = useState<string>("");

  const dispatch = useAppDispatch();

  const screen = useScreenDimentions();
  const token = useAppSelector((state) => state.user.payloadLogin);
  const reports = useAppSelector((state) => state.user.dataGetReports);

  const filteredReports = reports?.map((report: any, index: number) => {
    return {
      neighbor: index + 1,
      status: report?.status,
      created: new Date(report?.created_at).toLocaleString("es-Es", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      id: report?.id,
    };
  });

  const modalReportDetailHandler = (dataId: string) => {
    setModal(dataId);
  };

  useEffect(() => {
    dispatch(getReports(token));
  }, [dispatch, token]);

  return (
    <PageContentDist>
      <ModalCreateReport modal={modal} close={() => setModal("")} />
      <ModalReportsDetail
        modal={modal}
        reports={reports}
        close={() => setModal("")}
      />
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="Reportes" />
        {screen.width > 768 && (
          <>
            <PageContentDist.HeaderButtons>
              <ButtonPrimary
                text="Levantar reporte"
                handler={() => {
                  setModal("report");
                }}
              />
            </PageContentDist.HeaderButtons>
            <InputSearch />
          </>
        )}
        {screen.width <= 768 && (
          <>
            <ButtonSquare img={reportsImg} handler={() => setModal("report")} />
            <ButtonSquare img={search} />
          </>
        )}
      </PageContentDist.Header>
      <PageContentDist.Main>
        {screen.width > 768 && (
          <Table
            headers={["Id", "Estado", "Fecha", "Detail"]}
            tableData={filteredReports}
            handler={modalReportDetailHandler}
          />
        )}
        {screen.width <= 768 && (
          <ListDataMobile
            headers={["Id", "Estado", "Fecha"]}
            tableData={filteredReports}
            handler={modalReportDetailHandler}
          />
        )}
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default Reports;
