import Accordion from "@/Components/Accordion/Accordion";
import PagesContentTemplate from "@/Components/PagesContentTemplate/PagesContentTemplate";

const PaymentsUser = () => {
  return (
    <PagesContentTemplate>
      <PagesContentTemplate.AccordionList>
        <div style={{ height: "80px" }}>
          <h2>Pagos</h2>
          <h2>Vecinos</h2>
        </div>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </PagesContentTemplate.AccordionList>
    </PagesContentTemplate>
  );
};

export default PaymentsUser;
