import AliceCarousel from "react-alice-carousel";
import TopButtons from "./TopButtons/TopButtons";

const SliderTopButtons = () => {
  return (
    <div style={{ width: "100%", marginTop: "0px", marginBottom: "0px" }}>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls={true}
        responsive={{ 0: { items: 2 } }}
      >
        <TopButtons />
        <TopButtons />
        <TopButtons />
        <TopButtons />
      </AliceCarousel>
    </div>
  );
};

export default SliderTopButtons;
