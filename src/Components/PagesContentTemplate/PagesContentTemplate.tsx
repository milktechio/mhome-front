import { ReactNode } from "react";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { TableDataType } from "../../utils/types/tableData.types";
import ListDataMobile from "../Table/ListDataMobile/ListDataMobile";
import Table from "../Table/Table";
import Slider from "../Carousel/Slider";
import styles from "./PagesContentTemplate.module.css";
import { SliderItemDataType } from "@/utils/types/sliderData.types";

const PagesContentTemplate = ({ children }: { children: ReactNode }) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

const InputContainer = ({ children }: { children: ReactNode }) => {
  const screen = useScreenDimentions();
  return (
    <>
      {screen.width > 768 && (
        <div className={styles.pageInputContainer}>{children}</div>
      )}
    </>
  );
};

const TableContainer = ({
  headersWeb,
  headersMobile,
  data,
}: {
  headersWeb: string[];
  headersMobile: string[];
  data: TableDataType[];
}) => {
  const screen = useScreenDimentions();
  return (
    <div className={styles.pageTableContainer}>
      {screen.width <= 768 && (
        <ListDataMobile headers={headersMobile} tableData={data} />
      )}
      {screen.width > 768 && <Table headers={headersWeb} tableData={data} />}
    </div>
  );
};

const SliderContainer = ({ images }: { images: SliderItemDataType[] }) => {
  return (
    <>
      <Slider />
    </>
  );
};

PagesContentTemplate.InputContainer = InputContainer;
PagesContentTemplate.TableContainer = TableContainer;
PagesContentTemplate.SliderContainer = SliderContainer;

export default PagesContentTemplate;
